import React from 'react';
import './section.css';
import thr from './img/thr.png';    
import Serv from '../../services/';
import {connect} from 'react-redux';
import {col, err, rec} from '../../actions/actions';
import Loading from '../loading/';
import cond from './conditions';
import Error from '../error/';
import './media.css';

class Section extends React.Component {
    serv = new Serv();

    componentDidMount(){
        const {col, err, rec} = this.props;
        rec();

        base(col, this.serv, 'Kryvyi%20Rih', err);
    }

    render(){
        const {name, temp, loading, desc, error} = this.props;
        
        const load = loading ? <Loading/> : <View name={name} temp={temp} desc={desc}/>

        if(error){
            return (
                <section className="section">
                    <div className="obv_err">
                        <h1>Error, try again...</h1>
                        <Error/>
                    </div>
                </section>
            )
        }

        return (
            <section className="section">
                {load}
            </section>
        )
    }
}

const base = (col, serv, name, error) => {
    serv.getData(name)
        .then((result) => {

            const {name} = result;
            const {main:{feels_like}} = result;
            const {weather:[{description}]} = result;

            col(name, feels_like, description);

        }).catch(() => {
            error();             
        });
}

const toServLondon = (col, serv, rec, err) => {
    rec();
    base(col, serv, 'London', err);
}

const toServParis = (col, serv, rec, err) => {
    rec();
    base(col, serv, 'Paris', err);
}

const toServKr = (col, serv, rec, err) => {
    rec();
    base(col, serv, 'Kryvyi%20Rih', err);
}

class View extends React.Component{
    render(){
        const {name, temp, desc} = this.props;

        return (
            <>
                <div className="block_gr">
                    <img src={thr} alt=""/>
                </div>
                <div className="block_cont">
                    <h1>{name}</h1>
                    <div className="wrap_block_cont">
                        <h2>
                            {Math.sign(temp) === 1 ? '+' : Math.sign(temp) === -1 ? '-' : ''}
                            {Math.round(temp)}
                            °C
                        </h2>
                        {cond(desc)}
                    </div>
                </div>
            </>
        )   
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.name,
        temp: state.temp,
        desc: state.desc,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    col,
    err,
    rec
}

export {toServLondon,toServParis,toServKr};
export default connect(mapStateToProps, mapDispatchToProps)(Section);
import React from 'react';
import './input.css';
import {connect} from 'react-redux';
import {val} from '../../actions/actions';
import './media.css';

class Input extends React.Component {
    toChange(e){
        const {val} = this.props;
        val(e.target.value);
    }
    render(){
        return(
            <div className="wrap_inp">
                <form onSubmit={this.props.toServInput}>
                    <input onChange={(e) => this.toChange(e)} 
                    className="inp_search" 
                    placeholder="Enter the name of your city"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.value
    }
}

const mapDispatchToProps = {
    val
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);
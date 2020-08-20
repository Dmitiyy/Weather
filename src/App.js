import React from 'react';
import Header from './components/header/';
import './app.css';
import Section from './components/section/';
import Footer from './components/footer/';
import {toServLondon,toServParis,toServKr,toServInput} from './components/section/section';
import Serv from './services/';
import {col, rec, err, val} from './actions/actions';
import {connect} from 'react-redux';
import Input from './components/input/';

const serv = new Serv();

function App({col, rec, err, value}) {
  return (
    <>
      <div className="container">
        <Header/>
        <Input toServInput={(e) => {
          e.preventDefault();
          toServInput(col, serv, rec, err, value);
        }}/>
        <div className="obv">
          <Section/>
          <Footer 
            getLondon={() => toServLondon(col, serv, rec, err) }
            getParis={() => toServParis(col, serv, rec, err)}
            getKr={() => toServKr(col, serv, rec, err)}
          />
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    value:state.value
  };
}

const mapDispatchToProps = {
  col,
  rec,
  err,
  val
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

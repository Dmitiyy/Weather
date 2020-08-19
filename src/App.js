import React from 'react';
import Header from './components/header/';
import './app.css';
import Section from './components/section/';
import Footer from './components/footer/';
import {toServLondon,toServParis,toServKr} from './components/section/section';
import Serv from './services/';
import {col, rec, err} from './actions/actions';
import {connect} from 'react-redux';

const serv = new Serv();

function App({col, rec, err}) {
  return (
    <>
      <div className="container">
        <Header/>
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
  return {state};
}

const mapDispatchToProps = {
  col,
  rec,
  err
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

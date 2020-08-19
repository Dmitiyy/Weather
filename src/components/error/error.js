import React from 'react';
import err from './err.png';

export default class Error extends React.Component {
    render(){
        return(
            <img src={err} className="error_img" alt=""/>
        )
    }
}
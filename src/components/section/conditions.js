import React from 'react';
import sun from './img/sun.png';
import fwcl from './img/scl.png';
import cls from './img/cls.png';
import clsw from './img/clsw.png';
import shr from './img/shcl.png';
import mist from './img/mist.png';
import snclr from './img/sunclr.png';
import thun from './img/thun.png';
import snow from './img/snow.png';
import lgr from './img/lgr.png';
import snr from './img/snr.png';

const cond = (desc) => {
    switch(desc){
        case 'clear sky':
            return (
                <img src={sun} alt=""/>
            )
        case 'few clouds':
            return (
                <img src={fwcl} alt=""/>
            )  
        case 'scattered clouds':
            return (
                <img src={clsw} alt=""/>
            )  
        case 'broken clouds':
            return (
                <img src={cls} alt=""/>
            )  
        case 'shower rain':
            return (
                <img src={shr} alt=""/>
            )  
        case 'rain':
            return (
                <img src={snclr} alt=""/>
            )  
        case 'thunderstorm':
            return (
                <img src={thun} alt=""/>
            )  
        case 'snow':
            return (
                <img src={snow} alt=""/>
            )  
        case 'mist':
            return (
                <img src={mist} alt=""/>
            )  
        case 'overcast clouds':
            return (
                <img src={cls} alt=""/>
            )
        case 'light rain':
            return(
                <img src={lgr} alt=""/>
            )
        default:
            console.log(desc);
    }

    if(desc === 'thunderstorm with light rain' || desc === 'thunderstorm with rain'
    || desc === 'thunderstorm with heavy rain' || desc === 'light thunderstorm'
    || desc === 'heavy thunderstorm' || desc === 'thunderstorm with rain'
    || desc === 'ragged thunderstorm' || desc === 'thunderstorm with light drizzle'
    || desc === 'thunderstorm with drizzle' || desc === 'thunderstorm with heavy drizzle'){
        return (
            <img src={thun} alt=""/>
        )
    }

    if(desc === 'light intensity drizzle' || desc === 'drizzle'
    || desc === 'heavy intensity drizzle' || desc === 'light intensity drizzle rain'
    || desc === 'drizzle rain' || desc === 'heavy intensity drizzle rain'
    || desc === 'shower rain and drizzle' || desc === 'heavy shower rain and drizzle'
    || desc === 'shower drizzle' || desc === 'moderate rain') {
        return (
            <img src={lgr} alt=""/>
        )
    }

    if(desc === 'heavy intensity rain' || desc === 'very heavy rain'
    || desc === 'extreme rain' || desc === 'freezing rain'
    || desc === 'light intensity shower rain' || desc === 'heavy intensity shower rain'
    || desc === 'ragged shower rain') {
        return(
            <img src={shr} alt=""/>
        )
    }

    if(desc === 'light snow' || desc === 'Heavy snow'
    || desc === 'Sleet' || desc === 'Light shower sleet'
    || desc === 'Shower sleet' || desc === 'Light shower snow'
    || desc === 'Shower snow' || desc === 'Heavy shower snow') {
        return (
            <img src={snow} alt=""/>
        )
    }

    if(desc === 'Light rain and snow' || desc === 'Rain and snow') {
        return (
            <img src={snr} alt=""/>
        )
    }
}
export default cond;
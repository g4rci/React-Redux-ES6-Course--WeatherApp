import React from 'react';
import Weathericons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD, 
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
} from '../../../constants/weathers';
import './styles.css';

const icons = {
    [CLOUD]: 'cloud',
    [SUN]: 'day-sunny',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [THUNDER]: 'day-thunderstorm',
    [DRIZZLE]: 'day-showers'
}

const getWeatherIcon = (weatherState) => {
    const icon = icons[weatherState];

    const sizeIcons = '4x'
    if ( icon )
    return <Weathericons className='wicon' name={icon} size={sizeIcons} />
    else
    return <Weathericons className='wicon' name={'day-sunny'} size={sizeIcons} />

}

const WeatherTemperature = ({ temperature, weatherState }) => 
     (
        <div className='weatherTemperatureCont'>
            {
                getWeatherIcon(weatherState)
            }
            <span className='temperature'>{`${temperature}`}</span>
            <span className='temperatureType'>{`C°`}</span>
        </div>
    );

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};


export default WeatherTemperature

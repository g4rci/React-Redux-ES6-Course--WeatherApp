import React from 'react'
import {PropTypes} from 'prop-types'
import Skeleton from '@material-ui/lab/Skeleton';
import Location from './Location'
import WeatherData from './WeatherData'
import './styles.css';


const WeatherLocation = ({ onWeatherLocationClick, city, data }) => (
    <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
        <Location city={city}></Location>
        {data ? <WeatherData data={data} /> :
        <Skeleton animation="wave" width={400} height={100} />}
    </div>
    
 );

WeatherLocation.propTypes = { 
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}
export default WeatherLocation

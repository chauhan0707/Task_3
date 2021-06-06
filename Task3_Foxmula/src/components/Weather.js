import React, { useEffect } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { selectWeatherData } from '../reducers/reducer'
import { weatherDataReducer} from '../reducers/reducer'
import axios from 'axios'

export const Weather = () => {

    const dispatch = useDispatch()
    const weatherData = useSelector(selectWeatherData)

    return (
        <div>
            <div className="weather__data">
                <h1>{weatherData.main?.temp} Degree celcius</h1>
                <h5>{weatherData?.name}, India</h5>
            </div>
        </div>
    )
} 

export default Weather;
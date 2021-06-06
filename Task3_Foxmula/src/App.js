import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Weather from "./components/Weather"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { weatherDataReducer } from './reducers/reducer'

var city;

function App() {

  const dispatch = useDispatch()

  const [clicked, setClicked] = useState(false);

  const addCity = () => { 

    city = prompt("Enter your city")

    if (!city) {
      alert("Please enter your city first")
    }

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2712cea70c7dfa5a562cecd318ac7892&units=metric`

    axios.get(url)
      .then((res) => {
        console.log(res);
        dispatch(weatherDataReducer(res.data));
      })
      .catch(err => alert(err.message))

    setClicked(true);
  }

  return (
    <div className="App">
    <div className="index" >
      <button className="button" value={clicked} onClick={addCity}>
        Add city
      </button>
    </div>
      {clicked && <Weather />}

    </div>
  );
}

export default App;

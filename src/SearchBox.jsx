import TextField from '@mui/material/TextField';
import './SearchBox.css'
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function SearchBox({ updateInfo }) {
    let [city, setcity] = useState("");
    let [error, seterror] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "76256d9c62bade7bb4eaf65d9fa19b44";

    let displayCity = async () => {
        try {
            let fetchUrl = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let getResponse = await fetchUrl.json();

            let result =
            {
                city: getResponse.name,
                temp: getResponse.main.temp,
                tempmin: getResponse.main.temp_min,
                tempmax: getResponse.main.temp_max,
                humidity: getResponse.main.humidity,
                feelslike: getResponse.main.feels_like,
                weather: getResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }
        catch (err) {
            throw err;
        }
    };


    let handleChange = (event) => {
        setcity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            setcity("");
            let newSearch = await displayCity();
            updateInfo(newSearch);
        }catch(error)
        {
            seterror(true);
        }
    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit} >
                <TextField id="outlined-basic" label="Search City" variant="outlined" required onChange={handleChange} value={city} />
                <br></br><br></br>
                <Button variant="contained" type="submit">
                    Search
                </Button>
            </form>
            {error && <p style={{color:"red"}}>No Such Place Found in API !! </p>}
        </div>
    );
}
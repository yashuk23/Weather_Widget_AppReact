import SearchBox from "./SearchBox"
import CardInfo from "./CardInfo"
import { Info } from "@mui/icons-material"
import { useState } from "react"
export default function Weather()
{
    const [stateWeather,setstateWeather]=useState( {
        city: "Mumbai",
        temp: 29,
        tempmin: 34,
        tempmax: 35,
        humidity: 34,
        weather: "Humid",
        feelslike: 49,
    })

    let updateInfo=(result)=>
    {
        setstateWeather(result);
    }

    return(
       <div style={{textAlign:"center"}} className="Weather">
         <h1>Weather Widget</h1>
         < SearchBox updateInfo={updateInfo}/>
         < CardInfo info={stateWeather}/>
       </div>
    )
}
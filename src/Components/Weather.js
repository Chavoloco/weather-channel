import React from 'react'

const Weather = (props) => {    
    return ( 
        <div className="container text-light">
            <div className="cards pt-4">
                {props.city && props.country 
                ? <h1>{props.city},{props.country}</h1>
                :
                null
                }
                <h5 className="py-4">
                    {props.weatherIcon 
                    ? <i className={`wi ${props.weatherIcon.icon} display-1`}></i>
                    :""}
                </h5>
                {props.temp_centigrade 
                ?
                <h1 className="py-2">{props.temp_centigrade}&deg;</h1>
                : null
                }
                {minmaxTemp(props.temp_min, props.temp_max)}
                <h4 className="py-3">{props.description}</h4>
            </div>
        </div>
     );
}

function minmaxTemp( min , max ){
    if (min && max) {
        return(
            <h3>
                <span className="px-4">{min}&deg;</span>
                <span className="px-4">{max}&deg;</span>
            </h3>
        )  
    } else {
       return(
           null
       ) 
    }
}
 
export default Weather;
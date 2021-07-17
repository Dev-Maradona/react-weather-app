import React from 'react'

function Weather(props) {
    if (props.city && props.country) {
        return (
            <div className="info">
                <p> Tempreature Is : <span>{props.temp}</span> </p>
                <p> City Is : <span>{props.city}</span> </p>
                <p> Country Is : <span>{props.country}</span> </p>
                <p>Humidity Is : <span>{props.humidity}</span> </p>
                <p>Description Is : <span>{props.description}</span> </p>
            </div>
        )
    } else if (!props.city && !props.country) {
        return (
            <div className="info">
                <p>Please Enter a Country and City</p>
            </div>
        )
    } else {
        return (
            <div className="info">
                <p>{props.error}</p>
            </div>
        )
    }
}

export default Weather
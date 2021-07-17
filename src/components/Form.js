import React, {useState, useEffect, useRef} from 'react'

const Form = (props) => {

    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')

    const cityHandle = (e) => {
        setCity(e.target.value)
    }

    const countryHandle = (e) => {
        setCountry(e.target.value)
    }

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])  // To Trigger Only Once ..

    return (
        <div className="Form">
            <form onSubmit={props.getWeather}>
                <input type="text" value={city} onChange={cityHandle} ref={inputRef} name="city" placeholder="Enter Your City"></input>
                <input type="text" value={country} onChange={countryHandle} name="country" placeholder="Enter Your Country"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form
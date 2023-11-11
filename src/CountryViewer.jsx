import { useEffect, useState } from "react";

export const CountryViewer = () => {
    const [countryInfo, setCountryInfo] = useState({});

    const [text, setText] = useState('spain')

    const getCountryByName = async (countryName = 'spain') => {
        console.log('data que entra como countryName', countryName)
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        const [firstCountry] = await response.json();
        console.log('esta es el info')
        setCountryInfo(firstCountry)
    }

    useEffect(() => {
        console.log('hola este es el valor del input', text)
    }, [text])

    return (
        <div className="mainBody">
            Info del país
            {countryInfo.flag && (
                <>
                    <p>{countryInfo.flag}</p>
                    <p>{`La capital es: ${countryInfo.capital[0]}`}</p>
                    <p>{`La región es: ${countryInfo.region}`}</p>
                    <p>{`Las currencies de este pais son: ${Object.keys(countryInfo.currencies)} `}</p>
                </>
            )}
            <p><input value={text} onChange={e => {
                console.log('este es el evento', e)
                setText(e.target.value)
            }} style={{transform: 'scale(1.5)'}}></input></p>
            <p><button onClick={() => getCountryByName(text)}>Get info del pais</button></p>
        </div>
    )
}
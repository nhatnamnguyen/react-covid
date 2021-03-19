import React, { useState, useEffect } from 'react'
import CountryItem from './CountryItem'

function Country() {

    const [countryResults, setCountryResults] = useState([{country: '', cases: 0, deaths: 0, recovered: 0 }])

    useEffect(() => {
        fetch('https://coronavirus-19-api.herokuapp.com/countries')
            .then(response => {
                return response.json()
            }).then(data => {
                setCountryResults(data)
            })
    }, [])

    const listItems = countryResults
        .filter(countryResult => {
            return countryResult.country !== 'Total:' 
                && countryResult.country !== ''
                && countryResult.country !== 'World'                
        }).map((countryResult) =>
            <CountryItem key={countryResult.country} countryName={countryResult.country} case={countryResult.cases} death={countryResult.deaths} recovered={countryResult.recovered} />
        );
    return (
        <div>
            {listItems}
        </div>
    )
}

export default Country

import React, { useState, useEffect } from 'react'
import CountryItem from './CountryItem'
import SearchBar from './SearchBar'

function Country() {

    const [countryResults, setCountryResults] = useState([{country: '', cases: 0, deaths: 0, recovered: 0 }])
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        fetch('https://coronavirus-19-api.herokuapp.com/countries')
            .then(response => {
                return response.json()
            }).then(data => {
                setCountryResults(data)
            })
    }, [])

    function onSearchChange(e: any) {
        setSearchText(e.target.value)
    }

    const listItems = countryResults
        .filter(countryResult => {
            return countryResult.country !== 'Total:' 
                && countryResult.country !== ''
                && countryResult.country !== 'World'
                && countryResult.country.toLowerCase().includes(searchText.toLowerCase())
        }).map((countryResult) =>
            <CountryItem key={countryResult.country} countryName={countryResult.country} case={countryResult.cases} death={countryResult.deaths} recovered={countryResult.recovered} />
        );
    return (
        <div>
            <SearchBar onSearchChange={onSearchChange}></SearchBar>
            {listItems}
        </div>
    )
}

export default Country

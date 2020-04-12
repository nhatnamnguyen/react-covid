import React from 'react'
import CountryItem from './CountryItem'

function Country() {

    return (
        <div>
            <div>CoronaVirus by country</div>
            <CountryItem countryName='France' case={129654} death={13832} recovered={26391} />
        </div>
    )
}

export default Country

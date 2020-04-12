import React, { useEffect, useState } from 'react'
import GlobalItem from './GlobalItem'

function Global() {

    const [globalResult, setGlobalResult] = useState({cases: 0, deaths: 0, recovered: 0})

    useEffect(() => {
        fetch('https://coronavirus-19-api.herokuapp.com/all')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
            console.log('Data: ' + data);
            setGlobalResult(data)
        });
    }, []);

    return (
        <div>
            <label>Global Corona-19 Information</label>
            <GlobalItem type='Cases' style='case' count={globalResult.cases}/>
            <GlobalItem type='Deaths' style='death' count={globalResult.deaths}/>
            <GlobalItem type='Recovered' style='recovered' count={globalResult.recovered}/>
        </div>
    )
}

export default Global;
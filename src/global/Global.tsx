import React, { useEffect, useState } from 'react'
import { fetchGlobal } from '../service/CovidService';
import GlobalItem from './GlobalItem'

function Global() {

    const [globalResult, setGlobalResult] = useState({ cases: 0, deaths: 0, recovered: 0 })

    useEffect(() => {
        fetchGlobal(setGlobalResult)
    }, []);

    return (
        <div>
            <label>Global Corona-19</label>
            <GlobalItem type='Cases' withStyle='case' count={globalResult.cases} />
            <GlobalItem type='Deaths' withStyle='death' count={globalResult.deaths} />
            <GlobalItem type='Recovered' withStyle='recovered' count={globalResult.recovered} />
        </div>
    )
}

export default Global;
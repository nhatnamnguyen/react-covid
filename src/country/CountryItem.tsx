import React from 'react'

interface IProps {
    countryName: string,
    case: number,
    death: number,
    recovered: number
}

function CountryItem(props: IProps) {
    return (
        <div className='country-item'>
            <div>{props.countryName}</div>
            <div className='small'>Cases: <span className='case'>{formatNumber(props.case)}</span></div>
            <div className='small'>Deaths: <span className='death'>{formatNumber(props.death)}</span></div>
            <div className='small'>Recovered: <span className='recovered'>{formatNumber(props.recovered)}</span></div>
        </div>       
    )
}

function formatNumber(data: number): string {
    return data !== null ? data.toLocaleString() : '0'
}

export default CountryItem

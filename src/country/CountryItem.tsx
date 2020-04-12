import React from 'react'

interface IProps {
    countryName: string,
    case: number,
    death: number,
    recovered: number

}

function CountryItem(props: IProps) {
    return (
        <div>
            <div>{props.countryName}</div>
            <div className='small'>Cases: <span className='case'>{props.case}</span></div>
            <div className='small'>Deaths: <span className='death'>{props.death}</span></div>
            <div className='small'>Recovered: <span className='recovered'>{props.recovered}</span></div>
        </div>       
    )
}

export default CountryItem

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
            <div>Country name {props.countryName}</div>
            <div>Case {props.case}</div>
            <div>Death {props.death}</div>
            <div>Recovered {props.recovered}</div>
        </div>       
    )
}

export default CountryItem

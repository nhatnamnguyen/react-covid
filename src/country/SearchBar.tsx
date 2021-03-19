import { TextField } from '@material-ui/core'
import React from 'react'

interface Props {
    onSearchChange: any
}

function SearchBar(props : Props) {
    return <TextField label="Filter by country name" onChange={(e) => props.onSearchChange(e)}/>
}

export default SearchBar
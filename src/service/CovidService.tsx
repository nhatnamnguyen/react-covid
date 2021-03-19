import axios from "axios";

const COVID_URL_BASE = 'https://coronavirus-19-api.herokuapp.com'
const GLOBAL_PATH = "/all"
const COUNTRIES_PATH = "/countries"

const instance = axios.create({
    baseURL: COVID_URL_BASE
})

function fetchGlobal(callback: any): void {
    instance({ 
        method: "GET",
        url: GLOBAL_PATH
    })
    .then(response => {
        callback(response.data)
    })
}

function fetchCountries(callback: any): void {
    instance({
        method: "GET",
        url: COUNTRIES_PATH
    })
    .then(response => {
        callback(response.data)
    })
}

export { fetchGlobal, fetchCountries }
const COVID_URL_BASE = 'https://coronavirus-19-api.herokuapp.com'
const GLOBAL_PATH = "/all"
const COUNTRIES_PATH = "/countries"


function fetchGlobal(callback: any): void {
    fetch(COVID_URL_BASE + GLOBAL_PATH)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            callback(json)
        })
}


function fetchCountries(callback: any): void {
    fetch(COVID_URL_BASE + COUNTRIES_PATH)
        .then(response => {
            return response.json()
        }).then(json => {
            callback(json)
        })
}

export {fetchGlobal, fetchCountries}
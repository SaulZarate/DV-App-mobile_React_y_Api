
const rp = require('request-promise')

function datosConfirmadosCovid( pais ){

    let option = {
        url:'https://api.covid19api.com/total/dayone/country/'+ pais +'/status/confirmed',
        json:true
    }

    return rp(option)

}

module.exports = datosConfirmadosCovid;

import React from 'react';
import logo from './logo.svg';
import './App.css';

// Importo mis otros componentes ( hijos )
import FormApi from './componentes/FormApi';
import ResulApi from './componentes/ResulApi';

// Exporto mi funcion de API Covid19
const datosConfirmadosCovid = require("./library/apiCovid19");


class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      pais: "",
      casos: "",
      fecha: ""
    }

    // Este seteo es necesario para poder usar el this.state en las funciones
    this.handlerConsumoApi = this.handlerConsumoApi.bind(this)
  }

  /* Metodo para consumir la API */
  handlerConsumoApi(pais) {

    datosConfirmadosCovid(pais).then(confirmados => {

      let casosConfirmadosHoy = confirmados[confirmados.length -1];

      this.setState({
        pais:  ( pais === 'usa' ? 'Estados Unidos': pais.charAt(0).toUpperCase() + pais.slice(1) ),
        casos: casosConfirmadosHoy.Cases,
        fecha: casosConfirmadosHoy.Date.substring(0,10)
      })

    }).catch( (error) => {
      alert('Error con la Api al buscar el país')
      console.log("Error: " + error.message)
    })
    
  }

  render() {

    return (
      <div className="App">

        <header className="App-header">
          <h2 className="display-4 text-center ">React</h2>
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <main className="container">
          <h1 className="display-4 text-center pt-3" id="titleApi" >Coronavirus COVID19 API</h1>

          <div className="row bg-light mt-4 justify-content-between">

            {/* Componente del formulario */}
            <FormApi clasesCSS="col-3 card card-body" handlerConsumoApi={this.handlerConsumoApi} />

            {/* Tabla de resultados */}
            <ResulApi clasesCSS="col-8 card card-body" 
              pais = {this.state.pais}
              casos = {this.state.casos}
              fecha = {this.state.fecha} 
            />
          </div>
          
        </main>

      </div>
    )
  }

}

/* Exporto la clase "principal" */
export default App;

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
      flag: false,
      pais: "",
      casos: "",
      fecha: ""
    }

    // Este seteo es necesario para poder usar el this.state en las funciones
    this.handlerConsumoApi = this.handlerConsumoApi.bind(this)
  }

  /* Consumir API */
  handlerConsumoApi(flag, pais) {

    if (flag) {

      datosConfirmadosCovid(pais).then(confirmados => {

        let casosConfirmadosHoy = confirmados[confirmados.length -1];
        
        this.setState({
          flag: true,
          pais: pais,
          casos: casosConfirmadosHoy.Cases,
          fecha: casosConfirmadosHoy.Date.substring(0,10)
        })

      }).catch( error => {
          alert('El país que ingreso no es correcto')
      })
      
    }else{
      this.setState({
        flag: false
      })
    }

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
              flag = {this.state.flag}
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

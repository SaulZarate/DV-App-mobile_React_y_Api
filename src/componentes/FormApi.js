import React from 'react';

// Exporto mi funcion de API Covid19
const datosConfirmadosCovid = require("../library/apiCovid19");

class FormApi extends React.Component {

    constructor(props){
      super(props)
  
      // Estado del componente
      this.state = {
        flag: false
      }
  
      // Este seteo es necesario para poder usar el this.state en las funciones
      this.handlerBuscador = this.handlerBuscador.bind(this)
      this.handlerVerificadorInput = this.handlerVerificadorInput.bind(this)
      
    }
  
    // Metodo manejador del evento
    handlerBuscador(){
    
        if( this.state.flag ){
            
            let funcionPadre = this.props.handlerConsumoApi
            
            funcionPadre(this.state.flag, this.state.pais)

        }else{
            alert('El campo no puede estar vacio, ingrese un pais !!!')
        }

    }
  
    // Metodo verificador del texto
    handlerVerificadorInput(e){
  
      // target accede al elemento que disparo el evento -> input
      let inputTextPais = e.target.value.trim()
  
      if( inputTextPais.length > 0 ){
        
        this.setState({
          pais: inputTextPais,
          flag : true
        })
  
      }else{
        this.setState({
          flag : false,
          pais: ""
        })
         
      }
      
    }
  
    render() {
      return (      
        <div className={this.props.clasesCSS} >
          <div className="form-group">
            <label className="inputPais" id="labelBuscar">Buscar estadisticas</label>
            <input type="text" id="inputPais" className="form-control" placeholder="Ingrese el nombre un pais" onKeyUp={this.handlerVerificadorInput} />
          </div>
  
          <button type="button" onClick={this.handlerBuscador} className="btn btn-primary btn-block">Buscar</button>
        </div>
      )
    }
  
  }

/* Exporto este componente */
export default FormApi;
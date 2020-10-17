import React from 'react';


class FormApi extends React.Component {

    constructor(props){
      super(props)
      this.state = {
        pais: 'argentina'
      }
  
      // Este seteo es necesario para poder usar el this.state en las funciones
      this.handlerBuscador = this.handlerBuscador.bind(this)
      this.HandlerUpdatePais = this.HandlerUpdatePais.bind(this)
      
    }
  
    // Metodo manejador del evento
    handlerBuscador(){
      this.props.handlerConsumoApi( this.state.pais )
    }
  
    // Metodo para setear el pais del State
    HandlerUpdatePais(e){
      // e => elemento que "causo" el evento :::: e.target => accede al elemento
      let pais = e.target.value
      this.setState({
        pais: pais
      })
    }
  
    render() {
      return (      
        <div className={this.props.clasesCSS} >

          <div className="form-group mb-0">
            {/* -------- LABEL -------- */}
            <label className="inputPais" id="labelBuscar">Selecciones un país</label>
            <div className="form-group">
            {/* -------- SELECT -------- */}
              <select className="custom-select" name="pais" id="pais" onChange={this.HandlerUpdatePais}>
                <option value="argentina">Argentina</option>
                <option value="uruguay">Uruguay</option>
                <option value="brazil">Brazil</option>
                <option value="chile">Chile</option>
                <option value="mexico">Mexico</option>
                <option value="usa">Estados Unidos</option>
                <option value="canada">Canada</option>
              </select>
            </div>
          </div>
  
          <button type="button" onClick={this.handlerBuscador} className="btn btn-primary btn-block">Buscar</button>
          
        </div>
      )}
  }

/* Exporto este componente */
export default FormApi;

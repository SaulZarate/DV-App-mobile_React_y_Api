import React from 'react';

class ResulApi extends React.Component {


    render() {
        return (
            <div className={this.props.clasesCSS}>
                
                <h2 className="display-4 text-center pb-3" id="titleResult">Resultados de busqueda</h2>

                <table className="table table-hover m-0">
                    <thead>
                        <tr>
                            <th scope="col">País</th>
                            <th scope="col">Casos confirmados</th>
                            <th scope="col">Fecha</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td> { this.props.pais.length !== 0 ? this.props.pais : " --- "} </td>
                            <td> { this.props.pais.length !== 0 ? this.props.casos : " --- " } </td>
                            <td> { this.props.pais.length !== 0 ? this.props.fecha : " --- " } </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}

/* Exporto este componente */
export default ResulApi;

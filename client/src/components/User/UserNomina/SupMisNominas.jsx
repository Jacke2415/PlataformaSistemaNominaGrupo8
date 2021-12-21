
import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom'


class SupMisNominas extends Component{
    render(){
        return(
                <div className="container" style={{position: 'relative'}}>
                    <div className="row">
                        <div className="col-6">
                            <div><br /></div>
                            <h2>Creación de Nominas</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            
                        <Link to='/signin/userNomina/liquidarNomina' type="button" class="btn btn-primary">Crear Nomina</Link>
                        </div>
                    </div>
                </div>
           
        );
    }
}

export default SupMisNominas;




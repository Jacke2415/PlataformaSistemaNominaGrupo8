import React, {Component, Fragment} from 'react';


class SupLiquidar extends Component{
    render(){
        return(
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h1>Liquidar Nominas</h1>
                        </div>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-3">
                                
                                <select class="form-select" id="tipoliquidacion" required>
                                    <option selected disabled value="">Tipo de Liquidación</option>
                                    <option>...</option>
                                </select>
                                <div class="invalid-feedback">
                                   Por favor escoja Tipo de Liquidación
                                </div>
                            </div>
                            <div className="col-3">
                                 <select class="form-select" id="descripcionnomina" required>
                                    <option selected disabled value="">Descripción Nomina</option>
                                    <option>...</option>
                                </select>
                                <div class="invalid-feedback">
                                   Por favor escriba descripcion
                                </div>
                            </div>
                            <div className="col-3">
                            <select class="form-select" id="mes" required>
                                    <option selected disabled value="">Mes</option>
                                    <option>...</option>
                                </select>
                                <div class="invalid-feedback">
                                   Por favor escoja el mes
                                </div>
                            </div>
                            <div class="col-md-3">
                                <select class="form-select" id="year" required>
                                    <option selected disabled value="">Año</option>
                                    <option>...</option>
                                </select>
                                <div class="invalid-feedback">
                                   Por favor escoja el año
                                </div>
                            </div>
    

                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-2">
                            <button type="button" class="btn btn-primary">Liquidar Nomina</button>
                        </div>
                        <div className="col-2">
                            <button type="button" class="btn btn-primary">Cancelar</button>
                        </div>
                    </div>
                </div>
           
        );
    }
}

export default SupLiquidar;
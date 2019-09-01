import React, {Component} from "react";
import { Link } from "react-router-dom";
import { firebaseRotinasTemplate } from '../../firebase';
import { firebaseLooper, reverseArray } from '../shared/shared';
//  import MatchesBlock from '../../Ui/matches_block';

import "./estilos/listar.css";

export default class RotinasTemplate extends Component {
    state = {
        rotinasTemplate: []
    };

    componentDidMount() {
        firebaseRotinasTemplate.limitToLast(8).once('value').then((snapshot) => {
            const rotinasTemplate = firebaseLooper(snapshot);

            this.setState({
                rotinasTemplate: reverseArray(rotinasTemplate)
            })
        })
    };

    mostrarRotinas = (rotinasTemplate) => (
        
        

        <div>
            <div className="header_wrapper">
                        Rotinas
            </div>
            <div class="cont">
                <div className="wrapper">
                         
                    <table className="content-table">
                        <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Tipo Meta</th>
                            <th>Meta</th>
                            <th>Detalhes</th>
                        </tr>
                        </thead>
                        <tbody>
                            { rotinasTemplate.map( rotina => (                    
                                <tr key={ rotina.id }>
                                    <td>{ rotina.nome }</td>
                                    <td>{ rotina.descricao }</td>
                                    <td>{ rotina.tipoMeta }</td>
                                    <td>{ rotina.meta }</td>
                                    <td><Link to={`/rotinasTemplate/detalhes/${rotina.id}`}>Detalhes</Link></td>
                                </tr>
                            ))}
                            </tbody>
                    </table>
                </div>
                </div> 
            </div>         
    )
    
        
    render() {        
        return (           

             this.mostrarRotinas(this.state.rotinasTemplate)                     
        );
    }
}

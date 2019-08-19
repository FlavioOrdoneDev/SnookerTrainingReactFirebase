import React, {Component} from "react";
import { Link } from "react-router-dom";
import api from "../../servicos/api/api";

// import "./estilos/detalhes.css";

export default class CategoriaDetalhes extends Component {
    state = {
        categoria: {}
    };

    async componentDidMount() {
        const {id} = this.props.match.params;

        const response = await api.get(`/categorias/${id}`);

        this.setState({ categoria: response.data});
    };

    render() {
        const { categoria } = this.state;

        return (
            <div>
                <div >
                    <h1>{categoria.nome}</h1>
                    <p>{ categoria.descricao }</p>
                </div>
                <div className="button-back">
                <Link to={`/categorias`}>Voltar</Link>
                </div>
            </div>
        );
    }
}
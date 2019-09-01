import React, {useState} from 'react';
import './estilos/adicionar.css';

export default function AdicionarCategoria({ history }) {
    const [nome] = useState('');

    function salvar(e) {
        e.preventDefault();
        console.log(nome);
        console.log(e.descricao);

        history.push('/categorias');

    }

    return (
        <div className="adicionar-container">
            <form onSubmit={salvar}>
                <input 
                    type="text" 
                    placeholder="Nome categoria..."
                    value={nome}
                    onChange={ e => e.target.value}
                />
                <input 
                    type="text" 
                    placeholder="Descrição categoria..."                    
                />
                <button type="submit">Salvar</button>
            </form>
        </div>
    );
}
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Categorias from './paginas/categorias/listar';
import AdicionarCategoria from './paginas/categorias/adicionar';
import EditarCategoria from './paginas/categorias/editar';
import DetalhesCategoria from './paginas/categorias/detalhes';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Route path="/categorias" exact component={Categorias} />
            <Route path="/categorias/adicionar" component={AdicionarCategoria} />
            <Route path="/categorias/editar" component={EditarCategoria} />
            <Route path="/categorias/detalhes/:id" component={DetalhesCategoria} />
        </BrowserRouter>
    );
}
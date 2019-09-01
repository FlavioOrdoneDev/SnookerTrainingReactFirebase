import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './componentes/home';
import Layout from './componentes/layout/layout';

import Categorias from './componentes/categorias/listar';
import AdicionarCategoria from './componentes/categorias/adicionar';
import EditarCategoria from './componentes/categorias/editar';
import DetalhesCategoria from './componentes/categorias/detalhes';

import RotinasTemplate from './componentes/rotinas-template/listar';
import AdicionarRotinasTemplate from './componentes/rotinas-template/adicionar';
import EditarRotinasTemplate from './componentes/rotinas-template/editar';
import DetalhesRotinasTemplate from './componentes/rotinas-template/detalhes';

export default function Rotas() {
    return (

        // <Layout>
        //     <Switch>
        //         <Route component={ Home } path="/" />
        //     </Switch>
        // </Layout>


        <Layout>
            <Switch>
                <Route path="/categorias" exact component={Categorias} />
                <Route path="/categorias/adicionar" component={AdicionarCategoria} />
                <Route path="/categorias/editar" component={EditarCategoria} />
                <Route path="/categorias/detalhes/:id" component={DetalhesCategoria} />

                <Route path="/rotinasTemplate" exact component={RotinasTemplate} />
                <Route path="/rotinasTemplate/adicionar" component={AdicionarRotinasTemplate} />
                <Route path="/rotinasTemplate/editar" component={EditarRotinasTemplate} />
                <Route path="/rotinasTemplate/detalhes/:id" component={DetalhesRotinasTemplate} />
            </Switch>
        </Layout>
    );
}
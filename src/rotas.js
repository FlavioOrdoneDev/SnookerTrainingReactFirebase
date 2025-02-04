import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './componentes/layout/layout';

import Home from './componentes/home';
import Login from './componentes/login';
import Painel from './componentes/admin/painel';

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
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/login" exact component={Login} />
                    <Route path="/painel" exact component={Painel} />

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
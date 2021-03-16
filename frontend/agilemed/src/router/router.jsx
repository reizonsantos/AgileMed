import React from 'react'
import './router.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PaginaPrincipal from '../paginas/paginaLogin/login'
import CriarConta from '../paginas/paginaCriarConta/criarConta'
import PreAtendimento from '../paginas/paginaPreAtendimento/preAtendimento'
import Atendimento from '../paginas/paginaAtendimento/atendimento'


export default function () {
    return (
        <Router>
            <Switch>
                <>
                    <Route exact path="/" component={PaginaPrincipal} />
                    <Route exact path="/paginaCriarConta" component={CriarConta} />
                    <Route exact path="/paginaPreAtendimento" component={PreAtendimento} />
                    <Route exact path="/paginaAtendimento" component={Atendimento} />
                </>
            </Switch>
        </Router>
    )
}
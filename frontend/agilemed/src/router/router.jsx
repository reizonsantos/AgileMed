import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from '../components/login/login'
import CreateAccess from '../components/createAccess/createAccess'
import Screening from '../components/screening/screening'
import Attendance from '../components/attendance/attendance'
import MainPage from '../components/mainPage/mainPage'

export default function () {
    return(
        <div className="container">
            <Router>
                <Switch>
                    <>
                        <Route exact path="/" component={Login} exact/>
                        <Route exact path="/criarAcesso" component={CreateAccess} />
                        <Route exact path="/triagem" component={Screening} />
                        <Route exact path="/atendimento" component={Attendance} />
                        <Route exact path="/paginaPrincipal" component={MainPage} />
                    </>
                </Switch>
            </Router>
        </div>
    )
}
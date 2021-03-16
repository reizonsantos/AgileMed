import React from 'react';
import './menu.css'
import 'antd/dist/antd.css'

import { Menu } from 'antd'

import { Link } from 'react-router-dom'


export default function () {
    return(
        <div className="menuContainer">
            <Menu defaultSelectedKeys={['1']} mode="horizontal" theme="dark">
                <Menu.Item key="1">
                    <Link to="/">
                        Início
                    </Link>  
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/paginaCriarConta/">
                        Criar Conta
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to ="/paginaPreAtendimento/">
                        Pré Atendimento
                    </Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to ="/paginaAtendimento/">
                        Atendimento
                    </Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}
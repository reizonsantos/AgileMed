import React from 'react';
import "./login.css"
import 'antd/dist/antd.css'


import { Layout } from 'antd'
import Menu from '../../componentes/menu/menu'
import Login from '../../componentes/login/login'


const { Header, Content, Footer} = Layout;


export default function PaginaPrincipal() {
    return(
        <Layout>
            <Header className="layout">
                <Menu />
            </Header>
            <Content className="content">
                <Login />
            </Content>
            <Footer className="footer">
                Cabeçalho
            </Footer>
        </Layout>
    )
}
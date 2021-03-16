import React from 'react';
import "./criarConta.css"
import 'antd/dist/antd.css'


import { Link } from "react-router-dom"
import { Layout } from 'antd'

import Menu from '../../componentes/menu/menu'
import CriarConta from '../../componentes/criarConta/criarConta'

const { Header, Content, Footer} = Layout;


export default function () {
    return(
        <Layout>
            <Header>
                <Menu />
            </Header>
            <Content className="content">
                <CriarConta />
            </Content>
            <Footer className="footer">Cabeçalho</Footer>
        </Layout>
    )
}
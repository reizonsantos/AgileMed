import React from 'react';
import "./preAtendimento.css"
import 'antd/dist/antd.css'

import { Layout } from 'antd'

import Menu from '../../componentes/menu/menu'
import PreAtendimento from '../../componentes/preAtendimento/preAtendimento'

const { Header, Content, Footer} = Layout;


export default function () {
    return(
        <div className="preAtendimentoContainer">
            <Layout>
                <Header>
                    <Menu />
                </Header>
                <Content className="content">
                    <PreAtendimento />
                </Content>
                <Footer className="footer">Cabeçalho</Footer>
            </Layout>
        </div>
    )
}
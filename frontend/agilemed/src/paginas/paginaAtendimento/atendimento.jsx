import React from 'react';
import "./atendimento.css"
import 'antd/dist/antd.css'


import { Layout } from 'antd'

import Menu from '../../componentes/menu/menu'
import Atendimento from '../../componentes/atendimento/atendimento'

const { Header, Content, Footer} = Layout;


export default function () {
    return(
        <div className="atendimentoContainer">
            <Layout>
                <Header>
                    <Menu />
                </Header>
                <Content className="content">
                    <Atendimento />
                </Content>
                <Footer className="footer">Cabeçalho</Footer>
            </Layout>
        </div>
    )
}
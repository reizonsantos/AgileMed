import React from 'react';
import "./criarConta.css"
import 'antd/dist/antd.css'

import { Button, Input, Select, Form, Divider } from 'antd'

const { Option } = Select;

export default function() {
    return (
        <div className="criarContaContainer">
            <Form>
                <div className="informationPack">
                    <div>
                        <Form.Item label="Nome Completo" name="name">
                            <Input />
                        </Form.Item>
                        <Form.Item label="CPF" name="cpf">
                            <Input />
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item label="CRO" name="cro">
                            <Input />
                        </Form.Item><Form.Item label="Função " name="funcao">
                            <Select>
                                <Option value="Triagem"></Option>
                                <Option value="Médico"></Option>
                            </Select>
                        </Form.Item>
                    </div>
                </div>
                <Divider />
                <div className="adressPack">
                    <div>
                        <Form.Item label="CEP" name="cep">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Estado" name="estado">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Cidade" name="cidade">
                            <Input />
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item label="Bairro" name="bairro">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Endereço" name="endereco">
                            <Input />
                        </Form.Item>
                        <Form.Item label="N°" name="numeroCasa">
                            <Input />
                        </Form.Item>
                    </div>
                </div>
                <Divider />
                <div className="comunicationPack">
                    <Form.Item label="Celular" name="celular">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Email" name="email">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Senha" name="senha">
                        <Input.Password />
                    </Form.Item>
                    <Form.Item label="Confirmar senha" name="confirmarSenha">
                        <Input.Password />
                    </Form.Item>
                </div>
                <div className="buttonPack">
                    <Button type="primary">
                        Criar
                    </Button>
                    <Button type="danger">
                        Cancelar
                    </Button>
                </div> 
            </Form>
        </div>
    )
}
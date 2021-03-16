import React from 'react';
import './preAtendimento.css'
import 'antd/dist/antd.css'

import { Form, Button, Input, Select, InputNumber, Divider } from 'antd'

const { Option } = Select;


export default function () {
    return (
        <div className="preAtendimentoContainer">
            <Form>
                <div className="informationPack">
                    <Form.Item label="Nome Completo" name="nomePaciente">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Data Nascimento" name="dataNascimento">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Gênero " name="genero">
                        <Select>
                            <Option value="Masculino"></Option>
                            <Option value="Feminino"></Option>
                            <Option value="Outro"></Option>
                        </Select>
                    </Form.Item>
                    <div>
                        <Form.Item label="Celular" name="celular">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Email" name="email">
                            <Input />
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
                <div className="screeningPack">
                    <Form.Item label="Altura" name="altura">
                        <InputNumber />
                    </Form.Item>
                    <Form.Item label="Peso" name="peso">
                        <InputNumber />
                    </Form.Item>
                </div>
                <div className="buttonPack">
                    <Button type="primary">
                        Salvar
                    </Button>
                    <Button type="danger">
                        Cancelar
                    </Button>
                </div> 
            </Form>
        </div>
    )
}
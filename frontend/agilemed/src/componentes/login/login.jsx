import React from 'react';
import "./login.css"
import 'antd/dist/antd.css'

import { Form, Input, Button } from 'antd'

export default function () {
    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
      };

    return(
        <div className="loginContainer">
            <Form {...layout} name="basic">
                <Form.Item 
                    label="CPF" 
                    name="cpf"
                    rules={[
                        {
                        required: true,
                        message: "Por favor, inserir seu CPF"
                        },
                    ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item 
                    label="Senha" 
                    name="senha"
                    rules={[
                        {
                        required: true,
                        message: "Por favor, inserir sua Senha"
                        },
                    ]}
                    >
                        <Input.Password />
                    </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
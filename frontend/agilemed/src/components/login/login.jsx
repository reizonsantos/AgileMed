import React from 'react';
import './login.css';

import { Form, Button } from 'react-bootstrap'

export default function () {
    return (
        <div className="loginComponent">
            <Form>
                <Form.Group controlID="loginCPF">
                    <Form.Label>CPF</Form.Label>
                    <Form.Control type="text" placeholder="CPF" />
                </Form.Group>
                <Form.Group controlId="loginPass">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Senha"/>
                </Form.Group>
            </Form>
            <div className="buttonContainer">
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <a href="/criarAcesso/">Criar acesso</a>
            </div>
        </div>
    )
}
import React from 'react';
import './createAccess.css';

import { Form, Col, Button, Row } from 'react-bootstrap'



export default function (){
    return (
        <div className="createAccessComponent">
            <Form>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="formNome">
                            <Form.Label>Nome Completo</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formCPF">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="selectFuncao">
                            <Form.Label>Função</Form.Label>
                            <Form.Control as="select">
                                <option>Selecione uma função</option>
                                <option>Triagem</option>
                                <option>Atendimento Medico</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formCRO">
                            <Form.Label>CRO</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col xs={3}>
                        <Form.Group controlId="formZIP">
                            <Form.Label>CEP</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formCity">
                            <Form.Label>Cidade</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col xs={3}>
                        <Form.Group controlId="formUF">
                            <Form.Label>UF</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="formAddress">
                            <Form.Label>Logradouro</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col xs={1}>
                        <Form.Group controlId="formNumResidence">
                            <Form.Label>Numero</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formComplement">
                            <Form.Label>Complemento</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formNeighborhood">
                            <Form.Label>Bairro</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formPhone">
                            <Form.Label>Celular</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group controlId="formPass">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="confirmPass">
                            <Form.Label>Confirmar Senha</Form.Label>
                            <Form.Control type="password"/>
                        </Form.Group>
                    </Col>
                </Form.Row>
            </Form>
            <div class="buttonContainer">
                <Row>
                    <Col>
                        <Button className="buttonCancel" href="/" variant="danger">
                            Cancelar
                        </Button>
                    </Col>
                    <Col>
                        <Button className="buttonCreate" variant="success" type="submit">
                            Criar
                        </Button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
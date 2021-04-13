import React from 'react';
import './screening.css'

import { Form, Col, Row, Button } from 'react-bootstrap'

export default function (){
    return (
        <div className="screeningComponent">
            <Form>
                <Form.Row>
                    <Col xs={6}>
                        <Form.Group controlId="formNome">
                            <Form.Label>Nome Completo</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col xs={3}>
                        <Form.Group controlId="formBirthDate">
                            <Form.Label>Data Nascimento</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="selectGender">
                            <Form.Label>Gênero</Form.Label>
                            <Form.Control as="select">
                                <option></option>
                                <option>Masculino</option>
                                <option>Feminino</option>
                            </Form.Control>
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
                <div className="screeningContainer">
                    <Form.Row>
                        <Col>
                            <Form.Group controlId="formHeight">
                                <Form.Label>Altura</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formWeight">
                                <Form.Label>Peso</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                </div>
            </Form>
            <div class="buttonContainer">
                <Row>
                    <Col>
                        <Button className="buttonCancel" href="/paginaPrincipal/" variant="danger">
                            Cancelar
                        </Button>
                    </Col>
                    <Col>
                        <Button className="buttonSave" variant="success" type="submit">
                            Salvar
                        </Button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
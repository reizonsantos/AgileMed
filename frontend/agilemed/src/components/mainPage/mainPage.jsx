import React from 'react';
import './mainPage.css'

import { Button, Card } from 'react-bootstrap';
import imgScreening from '../../assets/imgs/screening.png';
import imgAttendance from '../../assets/imgs/attendance.png';

export default function () {
    return(
        <div className="mainPageComponent">
            <div className="cardScreening text-center">                
                <Card style={{ width: '25rem', height: '25rem'}}>
                    <Card.Body className="card-body">
                        <Card.Img src={imgScreening} width="288px" height="200px"/>
                        <Card.Title>Triagem</Card.Title>
                        <Card.Text>
                            Procedimento onde o paciente irá ser cadastrado e iniciará seu atendimento, entrando na fila de espera.
                        </Card.Text>
                        <Button href="/triagem/" variant="primary">Iniciar</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="cardAttendance text-center">
                <Card style={{ width: '25rem', height: '25rem'}}>
                    <Card.Body className="card-body">
                        <Card.Img src={imgAttendance} width="288px" height="200px"/>
                        <Card.Title>Atendimento</Card.Title>
                        <Card.Text>
                            Procedimento onde o paciente iniciará seu atendimento medico, e sairá na fila de espera.
                        </Card.Text>
                        <Button href="/atendimento/" variant="primary">Iniciar</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
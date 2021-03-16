import React, { useState } from 'react'
import './atendimento.css'
import 'antd/dist/antd.css'

import { Button, Modal, DatePicker, Space, Input, Form, Checkbox } from 'antd'
import FormItem from 'antd/lib/form/FormItem';

const { RangePicker} = DatePicker;
const { TextArea } = Input;


export default function(){
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
      }

    return (
        <div className="atendimentoContainer">
            <Button type="primary" onClick={showModal}>
                Iniciar Atendimento
            </Button>
            <Modal title="Atendimento" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form.Item label="Data do atendimento:" name="dataAtendimento">
                    <Space direction="vertical" size={12}>
                        <RangePicker 
                            showTime={{ format: 'HH:mm' }}
                            format="DD-MM-YYYY HH:mm"
                        />
                    </Space>
                </Form.Item>
                <Form.Item label="Sintomas" name="sintoma">
                    <TextArea showCount maxLength={100} />
                </Form.Item>
                <FormItem name="checkBoxMedicacaoLocal">
                    <Checkbox onChange={onChange}>Medicação Local</Checkbox>
                </FormItem>
                <FormItem label="Qual" name="medicacaoLocal">
                    <Input />
                </FormItem>
                <FormItem name="checkBoxMedicacaoCasa">
                    <Checkbox onChange={onChange}>Medicação em Casa</Checkbox>
                </FormItem>
                <FormItem label="Qual:" name="medicacaoCasa">
                    <Input />
                </FormItem>
                <FormItem name="checkBoxAtestado">
                    <Checkbox onChange={onChange}>Atestado</Checkbox>
                </FormItem>
                <FormItem label="Quantos dias" name="diasAtestado">
                    <Input />
                </FormItem>
            </Modal>
        </div>
    )
}
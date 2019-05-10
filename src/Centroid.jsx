import React from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

export default class Centroid extends React.Component {
    render() {
        return (
            <div>
                <Row form>
                <Col md={2}>
                <Label for="key">{key+1}</Label>
                </Col>
                <Col md={5}>
                    <FormGroup>
                    <Input type="text" name="k1" id="ipk" placeholder="IPK" />
                    </FormGroup>
                </Col>
                <Col md={5}>
                    <FormGroup>
                    <Input type="text" name="k2" id="kunjungan" placeholder="Kunjungan" />
                    </FormGroup>
                </Col>
                </Row>
            </div>
        )
    }
}
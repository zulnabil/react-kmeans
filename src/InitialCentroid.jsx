import React from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



export default class InitialCentroid extends React.Component {
    constructor(props) {
        super(props)
        this.tb1 = React.createRef()
        this.bb1 = React.createRef()
        this.tb2 = React.createRef()
        this.bb2 = React.createRef()
        this.tb3 = React.createRef()
        this.bb3 = React.createRef()
        this.tb4 = React.createRef()
        this.bb4 = React.createRef()
        this.tb5 = React.createRef()
        this.bb5 = React.createRef()
    }

    handleClick(e) {
        e.preventDefault()
        this.props.setCentroid(this.tb1.current.value, this.bb1.current.value, this.tb2.current.value, this.bb2.current.value, this.tb3.current.value, this.bb3.current.value, this.tb4.current.value, this.bb4.current.value, this.tb5.current.value, this.bb5.current.value,)
    }

    render() {
        return (
            <div className="form-centroid">
                <Form ref={myform => this.myForm = myform}>
                    <Row form>
                    <Col md={3}>
                    <Label className="label-form">Gizi Buruk (C1)</Label>
                    </Col>
                    <Col md={4.5}>
                        <FormGroup>
                        <Input type="text" innerRef={this.tb1} name="tb1" placeholder="Tinggi Badan" />
                        </FormGroup>
                    </Col>
                    <Col md={4.5}>
                        <FormGroup>
                        <Input type="text" innerRef={this.bb1} name="bb1" placeholder="Berat Badan" />
                        </FormGroup>
                    </Col>
                    </Row>

                    <Row form>
                    <Col md={3}>
                    <Label className="label-form">Gizi Kurang (C2)</Label>
                    </Col>
                    <Col md={4.5}>
                        <FormGroup>
                        <Input type="text" innerRef={this.tb2} name="tb2" placeholder="Tinggi Badan" />
                        </FormGroup>
                    </Col>
                    <Col md={4.5}>
                        <FormGroup>
                        <Input type="text" innerRef={this.bb2} name="bb2" placeholder="Berat Badan" />
                        </FormGroup>
                    </Col>
                    </Row>

                    <Row form>
                    <Col md={3}>
                    <Label className="label-form">Gizi Baik (C3)</Label>
                    </Col>
                    <Col md={4.5}>
                        <FormGroup>
                        <Input type="text" innerRef={this.tb3} name="tb3" placeholder="Tinggi Badan" />
                        </FormGroup>
                    </Col>
                    <Col md={4.5}>
                        <FormGroup>
                        <Input type="text" innerRef={this.bb3} name="bb3" placeholder="Berat Badan" />
                        </FormGroup>
                    </Col>
                    </Row>

                    <Row form>
                    <Col md={3}>
                    <Label className="label-form">Gizi Lebih (C4)</Label>
                    </Col>
                    <Col md={4.5}>
                        <FormGroup>
                        <Input type="text" innerRef={this.tb4} name="tb4" placeholder="Tinggi Badan" />
                        </FormGroup>
                    </Col>
                    <Col md={4.5}>
                        <FormGroup>
                        <Input type="text" innerRef={this.bb4} name="bb4" placeholder="Berat Badan" />
                        </FormGroup>
                    </Col>
                    </Row>

                    <Row form>
                    <Col md={3}>
                    <Label className="label-form">Obesitas (C5)</Label>
                    </Col>
                    <Col md={4.5}>
                        <FormGroup>
                        <Input type="text" innerRef={this.tb5} name="tb5" placeholder="Tinggi Badan" />
                        </FormGroup>
                    </Col>
                    <Col md={4.5}>
                        <FormGroup>
                        <Input type="text" innerRef={this.bb5} name="bb5" placeholder="Berat Badan" />
                        </FormGroup>
                    </Col>
                    </Row>
                    <Row>
                        <Col md={10}></Col>
                        <Col md={2}>
                            <Button className="button-form" onClick={this.handleClick.bind(this)} >Run</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}
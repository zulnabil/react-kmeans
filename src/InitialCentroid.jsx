import React from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input, Collapse, Card, CardBody } from 'reactstrap';



export default class InitialCentroid extends React.Component {
    constructor(props) {
        super(props)
        this.pend1 = React.createRef()
        this.masakerja1 = React.createRef()
        this.gol1 = React.createRef()
        this.pend2 = React.createRef()
        this.masakerja2 = React.createRef()
        this.gol2 = React.createRef()
        this.pend3 = React.createRef()
        this.masakerja3 = React.createRef()
        this.gol3 = React.createRef()
        this.pend4 = React.createRef()
        this.masakerja4 = React.createRef()
        this.gol4 = React.createRef()
        this.pend5 = React.createRef()
        this.masakerja5 = React.createRef()
        this.gol5 = React.createRef()
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    handleClick(e) {
        e.preventDefault()
        const p1 = this.pend1.current.value
        const p2 = this.pend2.current.value
        const p3 = this.pend3.current.value
        const p4 = this.pend4.current.value
        const m1 = this.masakerja1.current.value
        const m2 = this.masakerja2.current.value
        const m3 = this.masakerja3.current.value
        const m4 = this.masakerja4.current.value
        const g1 = this.gol1.current.value
        const g2 = this.gol2.current.value
        const g3 = this.gol3.current.value
        const g4 = this.gol4.current.value
        this.props.setCentroid(p1, m1, g1, p2, m2, g2, p3, m3, g3, p4, m4, g4)
    }

    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
        this.props.setManualCentroid()
      }

    render() {
        return (
            <div className="form-centroid">
            <p>- Auto Centroid (Default)</p>
            <Button outline color="warning" size="sm" onClick={this.toggle} style={{ marginBottom: '1rem'}}>Manual</Button><span> (Optional)</span>
                <Form ref={myform => this.myForm = myform}>
                    
                    <Collapse  isOpen={this.state.collapse}>
                    <Card>
                        <CardBody style={{backgroundColor: '#282c34'}}>
                            <Row form>
                                <Col md={3}>
                                <Label className="label-form">C1 (Lambat)</Label>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                    <Input type="text" innerRef={this.pend1} name="pend1" placeholder="Pendidikan" />
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                    <Input type="text" innerRef={this.masakerja1} name="masakerja1" placeholder="Masa Kerja" />
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                    <Input type="text" innerRef={this.gol1} name="gol1" placeholder="Golongan" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={3}>
                                <Label className="label-form">C2 (Cukup)</Label>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                    <Input type="text" innerRef={this.pend2} name="pend2" placeholder="Pendidikan" />
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                    <Input type="text" innerRef={this.masakerja2} name="masakerja2" placeholder="Masa Kerja" />
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                    <Input type="text" innerRef={this.gol2} name="gol2" placeholder="Golongan" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={3}>
                                <Label className="label-form">C3 (Cepat)</Label>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                    <Input type="text" innerRef={this.pend3} name="pend3" placeholder="Pendidikan" />
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                    <Input type="text" innerRef={this.masakerja3} name="masakerja3" placeholder="Masa Kerja" />
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                    <Input type="text" innerRef={this.gol3} name="gol3" placeholder="Golongan" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col md={3}>
                                <Label className="label-form">C4 (Sangat Cepat)</Label>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                    <Input type="text" innerRef={this.pend4} name="pend4" placeholder="Pendidikan" />
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                    <Input type="text" innerRef={this.masakerja4} name="masakerja4" placeholder="Masa Kerja" />
                                    </FormGroup>
                                </Col>
                                <Col md={3}>
                                    <FormGroup>
                                    <Input type="text" innerRef={this.gol4} name="gol4" placeholder="Golongan" />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </CardBody>
                        </Card>
                    </Collapse>
                    <Row>
                        <Col md={9}></Col>
                        <Col md={2}>
                            <Button color="warning" className="button-form" onClick={this.handleClick.bind(this)} >Cluster!</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}
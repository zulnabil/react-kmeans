import React, { Component } from 'react';
import { Collapse, Table, CardBody, Card, Button } from 'reactstrap';

class ConvertData extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <div>
        <Button outline color="warning" onClick={this.toggle} style={{ marginBottom: '1rem', borderRadius: '30px', width: '30px', height: '30px', padding: '0', marginRight: '-25px' }}>i</Button>
        <div className={this.state.collapse ? 'table-convertdata-isopen' : 'table-convertdata'}>
            <Collapse isOpen={this.state.collapse}>
            <Card>
                <CardBody >
                <p style={{color: 'black'}}>Tabel Konversi</p>
                <div className="collapse-table">
                    <Table bordered>
                        <thead>
                        <tr>
                            <th>Pend.</th>
                            <th>Conv.</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>SD</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>SMP</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>SMA</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>D2</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>D3</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>S1</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>S2</td>
                            <td>7</td>
                        </tr>
                        </tbody>
                    </Table>
                    <Table bordered>
                        <thead>
                        <tr>
                            <th>Gol.</th>
                            <th>Conv.</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>I/d</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>II/a</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>II/b</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>II/c</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>II/d</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>III/a</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>III/b</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>III/c</td>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td>III/d</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>IV/a</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>IV/b</td>
                            <td>11</td>
                        </tr>
                        <tr>
                            <td>IV/c</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <td>IV/d</td>
                            <td>13</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
                </CardBody>
            </Card>
            </Collapse>
        </div>
      </div>
    );
  }
}

export default ConvertData;
import React from 'react'
import { Table, Label, Row, Col } from 'reactstrap'

export default class TableCluster extends React.Component {
    render() {
      const { data } = this.props
      return (
        <div>
          <Label className="lbl-clustertable">Tabel Cluster Status Gizi Balita</Label>
          <button onClick={this.props.deNormalize} className={this.props.btndeNormalize} >Denormalisasi</button>
          <Table dark>

            <thead>
              <tr>
              <th>Balita</th>
              <th>Tinggi Badan (cm)</th>
              <th>Berat Badan (kg)</th>
              <th>Status Gizi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((index, key) => {
                const { newCluster } = this.props
                let cluster = ''
                if (newCluster[0].vectorIds.includes(key)) {
                  cluster = 'Gizi Buruk (C1)'
                } else if (newCluster[1].vectorIds.includes(key)) {
                  cluster = 'Gizi Kurang (C2)'
                } else if (newCluster[2].vectorIds.includes(key)) {
                  cluster = 'Gizi Baik (C3)'
                } else if (newCluster[3].vectorIds.includes(key)) {
                  cluster = 'Gizi Lebih (C4)'
                } else if (newCluster[4].vectorIds.includes(key)) {
                  cluster = 'Obesitas (C5)'
                }
                return (
                  <tr>
                    <th scope="row">{key+1}</th>
                    <td>{index.TB}</td>
                    <td>{index.BB}</td>
                    <td>{cluster}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
          <Row>
            <Col sm="6">
              <Label>Centroid Awal :</Label><br></br>
              <Label for="startCentroid">{this.props.startCentroid.map((index,key) => {
                return (
                  <div>
                    C{key+1} : {index.TB}  dan  {index.BB}
                  </div>
                )
              })}</Label>
            </Col>
            <Col sm="6">
              <Label>Centroid Baru :</Label><br></br>
              <Label for="newCentroid">{this.props.newCentroid.map((index,key) => {
                let TB = index.centroid.TB
                let BB = index.centroid.BB
                return (
                  <div>
                    C{key+1} : {Math.round(TB * 100) / 100}  dan  {Math.round(BB * 100) / 100}
                  </div>
                )
              })}</Label>
            </Col>
          </Row>
          
          <Label for="iteration">Jumlah Iterasi: {this.props.iteration}</Label>
        </div>
      );
    }
  }
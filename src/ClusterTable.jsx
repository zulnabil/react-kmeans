import React from 'react'
import { Table, Label, Row, Col, Button } from 'reactstrap'

import PieChart from './PieChart'

export default class ClusterTable extends React.Component {
    render() {
      const { data, newCluster } = this.props
      return (
        <div >
          <Label className="lbl-clustertable">Tabel Cluster Kecepatan Naik Gol. Pegawai</Label>
          <PieChart newCluster={newCluster}  />
          <Button outline color="warning" size="sm" onClick={this.props.deNormalize} className="btn-denormalisasi" >Denormalisasi</Button><br/>
          <br/>
          <div className="form-clustertable">
            <Table dark>
              <thead>
                <tr>
                <th>Pegawai</th>
                <th>Pend.</th>
                <th>M. Kerja</th>
                <th>Gol.</th>
                <th>Cluster</th>
                </tr>
              </thead>
              <tbody>
                {data.map((index, key) => {
                  const { newCluster } = this.props
                  let cluster = ''
                  if (newCluster[0].vectorIds.includes(key)) {
                    cluster = 'C1 (Lambat)'
                  } else if (newCluster[1].vectorIds.includes(key)) {
                    cluster = 'C2 (Cukup)'
                  } else if (newCluster[2].vectorIds.includes(key)) {
                    cluster = 'C3 (Cepat)'
                  } else if (newCluster[3].vectorIds.includes(key)) {
                    cluster = 'C4 (Sangat Cepat)'
                  }
                  return (
                    <tr key={key}>
                      <th scope="row">{key+1}</th>
                      <td>{index.Pendidikan}</td>
                      <td>{index.MasaKerja}</td>
                      <td>{index.Gol}</td>
                      <td>{cluster}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </div>
          <div className="desc-cluster">
            <Row>
              <Col sm="6">
                <Label>Centroid Awal :</Label><br></br>
                {this.props.manualCentroid ? (
                  <Label for="startCentroid">{this.props.startCentroid.map((index,key) => {
                    return (
                      <div key={key}>
                        C{key+1} : {index.Pendidikan}  dan  {index.MasaKerja} dan {index.Gol}
                      </div>
                    )
                  })}</Label>
                ) : (
                  <Label>Auto</Label>
                )}
              </Col>
              <Col sm="6">
                <Label>Centroid Baru :</Label><br></br>
                <Label for="newCentroid">{this.props.newCentroid.map((index,key) => {
                  let Pendidikan = index.centroid.Pendidikan
                  let MasaKerja = index.centroid.MasaKerja
                  let Gol = index.centroid.Gol
                  return (
                    <div key={key}>
                      C{key+1} : {Math.round(Pendidikan * 100) / 100}  dan  {Math.round(MasaKerja * 100) / 100} dan  {Math.round(Gol * 100) / 100}
                    </div>
                  )
                })}</Label>
              </Col>
            </Row> 
            <Label for="iteration">Jumlah Iterasi: {this.props.iteration}</Label>
          </div>
        </div>
      );
    }
  }
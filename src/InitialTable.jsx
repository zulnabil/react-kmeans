import React from 'react'
import { Table, Label, Button } from 'reactstrap'
import ConvertData from './ConvertData'

export default class InitialTable extends React.Component {
    render() {
      const { data } = this.props
      return (
        <div >
          <Label className="lbl-initialtable">Tabel Dataset Pegawai</Label>
          <Button outline color="warning" size="sm" onClick={this.props.Normalize} className="btn-normalisasi" >Normalisasi</Button> 
          <Button outline color="warning" size="sm" onClick={this.props.Convert} className="btn-normalisasi">Convert</Button>
          <ConvertData />
          <div className="form-initialtable">
            <Table dark>
              <thead>
                <tr>
                  <th>Pegawai</th>
                  <th>Pendidikan</th>
                  <th>Masa Kerja</th>
                  <th>Golongan</th>
                </tr>
              </thead>
              <tbody>
                {data.map((index, key) => {
                  return (
                    <tr key={key}>
                      <th scope="row">{key+1}</th>
                      <td>{index.Pendidikan}</td>
                      <td>{index.MasaKerja}</td>
                      <td>{index.Gol}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </div>
        </div>
      );
    }
  }
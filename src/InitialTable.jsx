import React from 'react'
import { Table, Label, Button } from 'reactstrap'

export default class InitialTable extends React.Component {
    render() {
      const { data } = this.props
      return (
        <div>
          <Label className="lbl-initialtable">Tabel Dataset Balita</Label>
          <button onClick={this.props.Normalize} className={this.props.btnNormalize} >Normalisasi</button>  
          <Table dark>

            <thead>
              <tr>
                <th>Balita</th>
                <th>Tinggi Badan (cm)</th>
                <th>Berat Badan (kg)</th>
              </tr>
            </thead>
            <tbody>
              {data.map((index, key) => {
                return (
                  <tr>
                    <th scope="row">{key+1}</th>
                    <td>{index.TB}</td>
                    <td>{index.BB}</td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </div>
      );
    }
  }
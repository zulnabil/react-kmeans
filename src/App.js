import React from 'react';
import './App.css';

import { Dataset } from './Dataset.js'
import InitialTable from './InitialTable'
import InitialCentroid from './InitialCentroid'
import ClusterTable from './ClusterTable'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: Dataset,

      dataStart: Dataset,

      initialCentroid: [
        {"Pendidikan": 0,"MasaKerja": 0,"Gol": 0},
        {"Pendidikan": 0,"MasaKerja": 0,"Gol": 0},
        {"Pendidikan": 0,"MasaKerja": 0,"Gol": 0},
        {"Pendidikan": 0,"MasaKerja": 0,"Gol": 0},
      ],

      newCluster: [
        {
          centroid: '',
          vectorIds: ''
        },
        {
          centroid: '',
          vectorIds: ''
        },
        {
          centroid: '',
          vectorIds: ''
        },
        {
          centroid: '',
          vectorIds: ''
        },
      ],

      iteration: 0,
      run: false,
      normalized: false,
      converted: false,
      manualCentroid: false
    }
    
  }

  setCentroid(p1, m1, g1, p2, m2, g2, p3, m3, g3, p4, m4, g4, p5, m5, g5) {
    if (!this.state.normalized) {
      alert('Data harus di normalisasi terlebih dahulu!')
    }
    else if (this.state.manualCentroid && !p1 && !m1 && !g1 && !p2 && !m2 && !g2 && !p3 && !m4 && !g4 && !p5 && !m5 && !g5) {
      alert('Isi form manual Centroid terlebih dahulu!')
    }
    else {
      this.setState({
        initialCentroid: [
          {"Pendidikan": p1,"MasaKerja": m1,"Gol": g1},
          {"Pendidikan": p2,"MasaKerja": m2,"Gol": g2},
          {"Pendidikan": p3,"MasaKerja": m3,"Gol": g3},
          {"Pendidikan": p4,"MasaKerja": m4,"Gol": g4},
        ],
        run: true
      })
      const kmeans = require('kmeans-engine');
      const data = this.state.data
      const centroids = this.state.initialCentroid
      
      kmeans.clusterize(data, { k: 4, maxIterations: 25, initialCentroids: this.state.manualCentroid ? centroids : undefined, debug: true }, (err, res) => {
        console.log('----- Results -----');
        console.log('Initial Centroids: ', centroids)
        console.log(`Iterations: ${res.iterations}`);
        console.log('Clusters: ');
        console.log(res.clusters);
  
        const newCluster = res.clusters
  
        const iteration = res.iterations
        
        this.setOutput(newCluster, iteration)
      });
    }
  }

  setOutput(newCluster, iteration) {
    this.setState({
      newCluster: newCluster,
      iteration: iteration
    })
  }

  setConvert() {
    if (this.state.converted) {
      alert('Data sudah di konversi!')
    }
    else {
      this.setState({
        data: this.state.data.map((index) => {
          let cPend = 0
          let cGol = 0
          switch (index.Pendidikan) {
            case 'SD':
              cPend = 1
              break;
            case 'SMP':
              cPend = 2
              break;
            case 'SMA':
              cPend = 3
              break;
            case 'D2':
              cPend = 4
              break;
            case 'D3':
              cPend = 5
              break;
            case 'S1':
              cPend = 6
              break;
            case 'S2':
              cPend = 7
              break;
            default:
              break;
          }
  
          switch (index.Gol) {
            case 'I/d':
              cGol = 1
              break;
            case 'II/a':
              cGol = 2
              break;
            case 'II/b':
              cGol = 3
              break;
            case 'II/c':
              cGol = 4
              break;
            case 'II/d':
              cGol = 5
              break;
            case 'III/a':
              cGol = 6
              break;
            case 'III/b':
              cGol = 7
              break;
            case 'III/c':
              cGol = 8
              break;
            case 'III/d':
              cGol = 9
              break;
            case 'IV/a':
              cGol = 10
              break;
            case 'IV/b':
              cGol = 11
              break;
            case 'IV/c':
              cGol = 12
              break;
            case 'IV/d':
              cGol = 13
              break;
            default:
              break;
          }
  
          return {
            Pendidikan: cPend,
            MasaKerja: index.MasaKerja,
            Gol: cGol,
          }
        }),
        converted: true
      })
    }
  }

  setNormalize() {
    if (!this.state.converted) {
      alert('Konversi data terlebih dahulu!')
    }
    else if (this.state.normalized) {
      alert('Data sudah di normalisasi!')
    }
    else {
      this.setState({
        data: this.state.data.map((index) => {
          let nPend = (index.Pendidikan - 1) / (7 - 1)
          let nMasaKerja = (index.MasaKerja - 4.1) / (40.3 - 4.1)
          let nGol = (index.Gol - 1) / (13 - 1)
          return {
            Pendidikan: Math.round(nPend * 100) / 100,
            MasaKerja: Math.round(nMasaKerja * 100) / 100,
            Gol: Math.round(nGol * 100) / 100,
          }
        }),
        normalized: true
      })
    }
  }

  setDenormalize() {
    this.setState({
      data: this.state.dataStart,
      normalized: false,
      converted: false
    })
  }

  setManualCentroid() {
    this.setState({
      manualCentroid: !this.state.manualCentroid
    })
  }

  render() {
      return (
        <div className="App">
          <h1 className="title-app">Clustering K-Means Kecepatan Naik Golongan Pegawai</h1><br></br>
          <header className="App-header">
            <div className="Initial-table">
              <InitialTable Convert={this.setConvert.bind(this)} btnNormalize={this.state.normalized ? 'btn-normalisasi-none' : 'btn-normalisasi'} Normalize={this.setNormalize.bind(this)} data={this.state.data}/>
              <InitialCentroid setManualCentroid={this.setManualCentroid.bind(this)} setCentroid={this.setCentroid.bind(this)} centroid={this.state.initialCentroid} />
            </div>
            <div className={this.state.run ? 'Cluster-table-run' : 'Cluster-table'}>
              <ClusterTable manualCentroid={this.state.manualCentroid} deNormalize={this.setDenormalize.bind(this)} startCentroid={this.state.initialCentroid} newCentroid={this.state.newCluster} iteration={this.state.iteration} data={this.state.data} newCluster={this.state.newCluster}/>
            </div>
          </header>
        </div>
      );
    }

  }

export default App;

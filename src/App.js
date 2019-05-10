import React from 'react';
import logo from './logo.svg';
import './App.css';

import InitialTable from './InitialTable'
import InitialCentroid from './InitialCentroid'
import TableCluster from './TableCluster'


class App extends React.Component {
  constructor(props) {
    super(props)
    // const datas = [
    //   {IPK: 3, Kunjungan: 2},
    //   {IPK: 3.83, Kunjungan: 3},
    //   {IPK: 3.75, Kunjungan: 3},
    //   {IPK: 3, Kunjungan: 1},
    //   {IPK: 1.92, Kunjungan: 1},
    //   {IPK: 3.6, Kunjungan: 2},
    // ]
    this.state = {
      data: [{"TB":65,"BB":5.8},
      {"TB":65,"BB":7.2},
      {"TB":60,"BB":5},
      {"TB":60,"BB":8},
      {"TB":52,"BB":5.8},
      {"TB":51,"BB":5},
      {"TB":54,"BB":3.5},
      {"TB":52.5,"BB":7.8},
      {"TB":70,"BB":4.2},
      {"TB":71,"BB":6.2},
      {"TB":72.5,"BB":7},
      {"TB":71.5,"BB":8.5},
      {"TB":55,"BB":5.5},
      {"TB":57,"BB":4.8},
      {"TB":52,"BB":6.5},
      {"TB":46.5,"BB":5.7},
      {"TB":95,"BB":12},
      {"TB":82,"BB":9.7},
      {"TB":75,"BB":8},
      {"TB":99,"BB":11},
      {"TB":99,"BB":7.8},
      {"TB":97.5,"BB":10},
      {"TB":88,"BB":9.4},
      {"TB":75,"BB":10.1},
      {"TB":95,"BB":12.8},
      {"TB":72,"BB":10.2},
      {"TB":50,"BB":6},
      {"TB":67,"BB":5},
      {"TB":68,"BB":8.2},
      {"TB":65,"BB":9.4},
      {"TB":61,"BB":7.1},
      {"TB":62,"BB":5.8},
      {"TB":53,"BB":3.5},
      {"TB":55,"BB":5.8},
      {"TB":54,"BB":3.5},
      {"TB":52.5,"BB":6.8},
      {"TB":77,"BB":4.7},
      {"TB":73,"BB":5.8},
      {"TB":72.5,"BB":6.9},
      {"TB":71.5,"BB":8.1},
      {"TB":55,"BB":6.7},
      {"TB":59,"BB":5.5},
      {"TB":54,"BB":4.9},
      {"TB":46.5,"BB":4.2},
      {"TB":95,"BB":7.4},
      {"TB":87,"BB":9.1},
      {"TB":75,"BB":6.5},
      {"TB":92.5,"BB":9.4},
      {"TB":93,"BB":8.4},
      {"TB":97.5,"BB":7.9}],

      dataStart: [{"TB":65,"BB":5.8},
      {"TB":65,"BB":7.2},
      {"TB":60,"BB":5},
      {"TB":60,"BB":8},
      {"TB":52,"BB":5.8},
      {"TB":51,"BB":5},
      {"TB":54,"BB":3.5},
      {"TB":52.5,"BB":7.8},
      {"TB":70,"BB":4.2},
      {"TB":71,"BB":6.2},
      {"TB":72.5,"BB":7},
      {"TB":71.5,"BB":8.5},
      {"TB":55,"BB":5.5},
      {"TB":57,"BB":4.8},
      {"TB":52,"BB":6.5},
      {"TB":46.5,"BB":5.7},
      {"TB":95,"BB":12},
      {"TB":82,"BB":9.7},
      {"TB":75,"BB":8},
      {"TB":99,"BB":11},
      {"TB":99,"BB":7.8},
      {"TB":97.5,"BB":10},
      {"TB":88,"BB":9.4},
      {"TB":75,"BB":10.1},
      {"TB":95,"BB":12.8},
      {"TB":72,"BB":10.2},
      {"TB":50,"BB":6},
      {"TB":67,"BB":5},
      {"TB":68,"BB":8.2},
      {"TB":65,"BB":9.4},
      {"TB":61,"BB":7.1},
      {"TB":62,"BB":5.8},
      {"TB":53,"BB":3.5},
      {"TB":55,"BB":5.8},
      {"TB":54,"BB":3.5},
      {"TB":52.5,"BB":6.8},
      {"TB":77,"BB":4.7},
      {"TB":73,"BB":5.8},
      {"TB":72.5,"BB":6.9},
      {"TB":71.5,"BB":8.1},
      {"TB":55,"BB":6.7},
      {"TB":59,"BB":5.5},
      {"TB":54,"BB":4.9},
      {"TB":46.5,"BB":4.2},
      {"TB":95,"BB":7.4},
      {"TB":87,"BB":9.1},
      {"TB":75,"BB":6.5},
      {"TB":92.5,"BB":9.4},
      {"TB":93,"BB":8.4},
      {"TB":97.5,"BB":7.9}],

      initialCentroid: [
        {TB:0, BB:0},
        {TB:0, BB:0},
        {TB:0, BB:0},
        {TB:0, BB:0},
        {TB:0, BB:0},
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
        {
          centroid: '',
          vectorIds: ''
        },
      ],

      iteration: 0,
      run: false,
      normalized: false
    }
    
  }

  setCentroid(tb1, bb1, tb2, bb2, tb3, bb3, tb4, bb4, tb5, bb5) {
    this.setState({
      initialCentroid: [
        {TB: tb1, BB: bb1},
        {TB: tb2, BB: bb2},
        {TB: tb3, BB: bb3},
        {TB: tb4, BB: bb4},
        {TB: tb5, BB: bb5},
      ],
      run: true
    })
    const kmeans = require('kmeans-engine');
    const data = this.state.data
    const centroids = [
      {TB: tb1, BB: bb1},
      {TB: tb2, BB: bb2},
      {TB: tb3, BB: bb3},
      {TB: tb4, BB: bb4},
      {TB: tb5, BB: bb5},
    ]
    console.log('owkowkowkwokw',centroids)
    
    // accepted options:
    // k: number of clusters
    // maxIterations (optional): max number of iterations
    // initialCentroids (optional): an array of initial centroids in length of k
    // debug (optional): show debug message in console or not, default is false
    kmeans.clusterize(data, { k: 5, maxIterations: 5, initialCentroids: centroids, debug: true }, (err, res) => {
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

  setOutput(newCluster, iteration) {
    this.setState({
      newCluster: newCluster,
      iteration: iteration
    })
  }

  setNormalize() {
    this.setState({
      data: this.state.data.map((index) => {
        let nTB = (index.TB - 46.5) / (99 - 46.5)
        let nBB = (index.BB - 3.5) / (12.8 - 3.5)
        return {
          TB: Math.round(nTB * 100) / 100,
          BB: Math.round(nBB * 100) / 100,
        }
      }),
      normalized: true
    })
  }

  setDenormalize() {
    this.setState({
      data: this.state.dataStart,
      normalized: false
    })
  }

  render() {
      return (
        <div className="App">
          <h1 className="title-app">Clustering K-Means Menentukan Status Gizi Balita</h1><br></br>
          <header className="App-header">
          
            
            <div className="Initial-table">
              <InitialTable btnNormalize={this.state.normalized ? 'btn-normalisasi-none' : 'btn-normalisasi'} Normalize={this.setNormalize.bind(this)} data={this.state.data}/>
              <InitialCentroid setCentroid={this.setCentroid.bind(this)} centroid={this.state.initialCentroid} />
            </div>
            <div className={this.state.run ? 'Cluster-table-run' : 'Cluster-table'}>
              <TableCluster btndeNormalize={this.state.normalized ? 'btn-denormalisasi' : 'btn-denormalisasi-none'} deNormalize={this.setDenormalize.bind(this)} startCentroid={this.state.initialCentroid} newCentroid={this.state.newCluster} iteration={this.state.iteration} data={this.state.data} newCluster={this.state.newCluster}/>
            </div>
          </header>
        </div>
      );
    }

  }

export default App;

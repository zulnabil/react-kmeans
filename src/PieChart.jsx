import React from 'react'
import { Chart } from 'react-google-charts'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

export default class PieChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }

    render() {
        const { newCluster } = this.props
        return (
            <div>
                <div>
                <Button size="sm" outline color="warning" onClick={this.toggle} className="btn-denormalisasi">Tampilkan Grafik</Button>
                <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Grafik</ModalHeader>
                <ModalBody>
                        <Chart
                            width={'750px'}
                            height={'400px'}
                            chartType="PieChart"
                            loader={<div>Loading Chart</div>}
                            data={[
                                ['Kriteria', 'Jumlah'],
                                ['Lambat', newCluster[0].vectorIds.length],
                                ['Cukup', newCluster[1].vectorIds.length],
                                ['Cepat', newCluster[2].vectorIds.length],
                                ['Sangat Cepat', newCluster[3].vectorIds.length],
                            ]}
                            options={{
                                title: 'Grafik Kenaikan Pangkat Pegawai',
                                animation: {
                                    startup: this.state.modal,
                                    easing: 'linear',
                                    duration: 1500,
                                  },
                                  
                            }}
                            chartEvents={[
                                {
                                  eventName: 'animationfinish',
                                  callback: () => {
                                    console.log('Animation Finished')
                                  },
                                },
                              ]}
                            rootProps={{ 'data-testid': '1' }}
                            />
                </ModalBody>
                </Modal>
                </div>
            </div>
        )
    }
}
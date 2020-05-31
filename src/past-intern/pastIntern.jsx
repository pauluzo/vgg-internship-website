import React, { Component } from 'react';
import PastInternList from './PastInternList'
import './pastIntern.css'
import { internData } from './internData'
import { Row } from 'react-bootstrap';

class PastIntern extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datainfo: internData
        }
    }
    render() {
        const { datainfo } = this.state
<<<<<<< HEAD
          console.log(datainfo);
          
=======
        const interns = datainfo.map(data => (
            <PastInternList className="m-2" key={data.id} data={data} />
        ))
>>>>>>> 83894e50891feef9340b5ad9c8c9e11921bf5b8c
        return (
            <div className="container  py-5">
                {/* title */}
                <div className="row">
<<<<<<< HEAD
                  <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3 mt-5">
                      <h2 className="text-aqua" style={{ marginBottom:"5px"}}>past intern</h2>
                      <hr className="bg-aqua" style={{width:"50%", marginBottom: '10px'}} />
                  </div>
                </div>
                {/* end of title */}
                <div className="row">
                  {datainfo.map(data => (<PastInternList key={data.id} userData={data} />))}
                </div>
=======
                    <div className="col-12 mx-auto  text-center text-uppercase mb-3">
                        <h2>Our Past Interns</h2>
                    </div>
                </div>
                {/* end of title */}
                <Row xs={1} md={2} lg={3} noGutters={true}>
                    {interns}
                </Row>
>>>>>>> 83894e50891feef9340b5ad9c8c9e11921bf5b8c
            </div>
        );
    }
}

export default PastIntern;
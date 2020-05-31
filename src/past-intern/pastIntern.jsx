import React, { Component } from 'react';
import PastInternList from './PastInternList'
import './pastIntern.css'
import { internData } from './internData'

class PastIntern extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datainfo: internData
        }
    }
    render() {
        const { datainfo } = this.state
          console.log(datainfo);
          
        return (
            <div className="container py-5">
                {/* title */}
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3 mt-5">
                      <h2 className="text-aqua" style={{ marginBottom:"5px"}}>past intern</h2>
                      <hr className="bg-aqua" style={{width:"50%", marginBottom: '10px'}} />
                  </div>
                </div>
                {/* end of title */}
                <div className="row">
                  {datainfo.map(data => (<PastInternList key={data.id} userData={data} />))}
                </div>
            </div>
        );
    }
}

export default PastIntern;
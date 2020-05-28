import React, { Component } from 'react';
import PastInternList from './PastInternList'
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

        return (
            <div className="container py-5">
                {/* title */}
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                      <h2>past intern</h2>
                  </div>
                </div>
                {/* end of title */}
                <div className="row">
                  {datainfo.map(data =>(
                    <PastInternList key={data.id} data={data}/> 
                  ))}
                </div>
            </div>
        );
    }
}

export default PastIntern;
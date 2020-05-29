import React, { Component } from 'react';
import PastInternList from './PastInternList'
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
        const interns = datainfo.map(data => (
            <PastInternList className="m-2" key={data.id} data={data} />
        ))
        return (
            <div className="container  py-5">
                {/* title */}
                <div className="row">
                    <div className="col-12 mx-auto  text-center text-uppercase mb-3">
                        <h2>Our Past Interns</h2>
                    </div>
                </div>
                {/* end of title */}
                <Row xs={1} md={2} lg={3} noGutters={true}>
                    {interns}
                </Row>
            </div>
        );
    }
}

export default PastIntern;
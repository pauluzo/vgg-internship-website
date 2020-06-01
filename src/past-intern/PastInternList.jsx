import React, { Component } from 'react';

import './pastIntern'

class PastInternList extends Component {
    render() {
        const { name, track, image_url, Description } = this.props.userData
        return (
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <div className="card" style={{ height: "100%" }}>
                    <img src={image_url} style={{ height: "14rem",objectFit:"cover" }} className="img-card-top" alt="" />
                    <div className="card-body text-capitalize">
                        <h6 className="past-intern">{name}</h6>
                        <h6 className="text-success">{track}</h6>
                        <h6 className="past-intern">{Description}</h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default PastInternList;
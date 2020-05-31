import React, { Component } from 'react';
<<<<<<< HEAD
import './pastIntern.css'

=======
import { Button, Card, Col } from "react-bootstrap";
>>>>>>> 83894e50891feef9340b5ad9c8c9e11921bf5b8c

class PastInternList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
<<<<<<< HEAD
        const { name, track, image_url, Description } = this.props.userData

        return (
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3" style={{ borderRadius: '50%' }}>
                <div className="card" style={{ height: '100%' }}>
                    <img src={image_url} style={{ height: '14rem' }} className="img-card-top" alt="" />
                    <div className="card-body text-capitalize">
                        <h6 className="text-aqua">{name}</h6>
                        <h6 className="text-success">{track}</h6>
                         <p className="past-intern">{Description}</p>
                    </div>
                </div>
            </div>
=======
        const { data, className } = this.props
        return (
            <Col >
                <Card className={className}>
                    <Card.Img
                        style={{ height: "200px", objectFit: "cover" }}
                        variant="top"
                        src={data.image_url} />
                    <Card.Body>
                        <Card.Title className="text-uppercase">
                            {`${data.id}. `}
                            {data.name}
                        </Card.Title>
                        <Card.Text>
                            {data.track}
                        </Card.Text>
                        <Button
                            variant="primary"
                            href={data.buttonLink}>
                            {data.buttonText}
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
>>>>>>> 83894e50891feef9340b5ad9c8c9e11921bf5b8c
        );
    }
}

export default PastInternList;
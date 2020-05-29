import React, { Component } from 'react';
import { Button, Card, Col } from "react-bootstrap";

class PastInternList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
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
        );
    }
}

export default PastInternList;
import React from "react";
import { Col, Row } from "react-bootstrap";

export const ItemDescription = ({ description }) => (
    <Row className="light-bg">
        <Col>
            <h2>Description</h2>
            <p>{description}</p>
        </Col>
    </Row>
);

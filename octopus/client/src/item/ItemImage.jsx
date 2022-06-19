import React from "react";
import { Col } from "react-bootstrap";

export const ItemImage = ({ url }) => (
    <Col md={12} lg={6}>
        <img
            src={url}
            alt="Product"
            className="img-fluid item-img mx-auto d-block"
        />
    </Col>
);

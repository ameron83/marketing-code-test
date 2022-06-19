import React from "react";
import { Col, Row } from "react-bootstrap";

export const ItemHeader = ({ name, power = "", quantity = "" }) => (
    <Row className="light-bg">
        <Col>
            <h1>{name}</h1>
            {power || quantity ? (
                <p className="blue-text">{`${power}${
                    power && quantity ? " // " : ""
                }${quantity ? `Packet of ${quantity}` : ""}`}</p>
            ) : null}
        </Col>
    </Row>
);

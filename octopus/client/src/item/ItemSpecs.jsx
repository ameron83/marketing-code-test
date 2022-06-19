import React from "react";
import { Col, Row } from "react-bootstrap";

export const ItemSpecs = ({
    brand,
    weight,
    height,
    width,
    length,
    modelCode,
    colour,
}) => (
    <Row>
        <Col>
            <h2>Specifications</h2>
            {brand ? (
                <Row className="spec-border">
                    <Col xs={6}>Brand</Col>
                    <Col>{brand}</Col>
                </Row>
            ) : null}
            {weight ? (
                <Row className="spec-border">
                    <Col xs={6}>Item weight</Col>
                    <Col>{weight}</Col>
                </Row>
            ) : null}
            {height || width || length ? (
                <Row className="spec-border">
                    <Col xs={6}>Dimensions</Col>
                    <Col>{`${height ? height : ""}${
                        height && (width || length) ? "x" : ""
                    }
                        ${width ? width : ""}${
                        (height || width) && length ? "x" : ""
                    }
                    ${length ? length : ""}`}</Col>
                </Row>
            ) : null}
            {modelCode ? (
                <Row className="spec-border">
                    <Col xs={6}>Item model number</Col>
                    <Col>{modelCode}</Col>
                </Row>
            ) : null}
            {colour ? (
                <Row className="spec-border">
                    <Col xs={6}>Colour</Col>
                    <Col>{colour}</Col>
                </Row>
            ) : null}
        </Col>
    </Row>
);

import React, { useState, useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";

import { BasketContext } from "../basket/BasketProvider";

const renderPrice = (price) => {
    const priceNum = Number.parseFloat(price);
    if (Number.isNaN(priceNum)) return;
    const correctedPrice = (priceNum / 100).toFixed(2);
    const priceParts = correctedPrice.toString().split(".");
    if (priceParts.length !== 2) return;
    return (
        <h1>
            {priceParts[0]}
            <sup>.{priceParts[1]}</sup>
        </h1>
    );
};

export const ItemCartControls = ({ price }) => {
    const [qty, setQty] = useState(1);
    const { basketItems, setBasketItems } = useContext(BasketContext);

    return (
        <Row>
            <Col>
                <Row>
                    <Col xs={6} style={{ alignSelf: "center" }}>
                        {renderPrice(price)}
                    </Col>
                    <Col>
                        <Row>
                            <Col className="text-center blue-text">QTY</Col>
                        </Row>
                        <Row>
                            <Col className="text-end">
                                <Button
                                    className="increment-button"
                                    disabled={qty <= 1}
                                    onClick={() => setQty(qty - 1)}
                                >
                                    -
                                </Button>
                            </Col>
                            <Col className="text-center">
                                <h2 data-testid="qty">{qty}</h2>
                            </Col>
                            <Col className="text-start">
                                <Button
                                    className="increment-button"
                                    onClick={() => setQty(qty + 1)}
                                >
                                    +
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-grid">
                        <Button
                            size="lg"
                            className="fw-bold add-button"
                            onClick={() => setBasketItems(basketItems + qty)}
                        >
                            Add to cart
                        </Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

import React, { useContext } from "react";
import { Row, Col, Badge } from "react-bootstrap";

import { BasketContext } from "./basket/BasketProvider";
import OctopusLogo from "./assets/logo.svg";
import BasketIcon from "./assets/basket.svg";

export const Header = () => {
    const { basketItems } = useContext(BasketContext);

    return (
        <Row>
            <Col xs={10}>
                <img
                    src={OctopusLogo}
                    alt="Octopus Logo"
                    className="img-fluid header-img"
                />
            </Col>
            <Col className="text-end" style={{ position: "relative" }}>
                <img
                    src={BasketIcon}
                    alt="Basket"
                    className="img-fluid header-img"
                />
                {basketItems > 0 ? (
                    <Badge className="basket-badge" data-testid="basket">
                        {basketItems}
                    </Badge>
                ) : null}
            </Col>
        </Row>
    );
};

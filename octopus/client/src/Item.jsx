import React from "react";
import { Row, Col } from "react-bootstrap";
import { useQuery } from "@apollo/react-hooks";

import { getShopItem } from "./queries";

import { ItemImage } from "./item/ItemImage";
import { ItemHeader } from "./item/ItemHeader";
import { ItemCartControls } from "./item/ItemCartControls";
import { ItemDescription } from "./item/ItemDescription";
import { ItemSpecs } from "./item/ItemSpecs";

export const Item = () => {
    const { loading, error, data } = useQuery(getShopItem, {
        variables: { productId: 1 },
    });

    if (loading) return <h2>Loading Item...</h2>;
    if (error) return <h2>There was an error, try again later...</h2>;

    const { product } = data;
    if (product) {
        return (
            <Row>
                <ItemImage url={product.imgUrl} />
                <Col md={12} lg={6}>
                    <ItemHeader
                        name={product.name}
                        power={product.power}
                        quantity={product.quantity}
                    />
                    <ItemCartControls price={product.price} />
                    {product.description && (
                        <ItemDescription description={product.description} />
                    )}
                    <ItemSpecs {...product} />
                </Col>
            </Row>
        );
    } else return <h2>No Item Found</h2>;
};

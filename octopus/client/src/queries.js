import { gql } from "apollo-boost";

export const getShopItem = gql`
    query($productId: ID!) {
        product(productId: $productId) {
            id
            name
            power
            description
            price
            quantity
            brand
            weight
            height
            width
            length
            modelCode
            colour
            imgUrl
        }
    }
`;

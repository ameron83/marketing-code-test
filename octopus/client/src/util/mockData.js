import { getShopItem } from "../queries";

export const mocks = [
    {
        request: {
            query: getShopItem,
            variables: { productId: 1 },
        },
        result: {
            data: {
                product: {
                    id: "1",
                    name: "Energy saving light bulb",
                    power: "25W",
                    description:
                        "Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait around warm start and flicker free features make for a great all purpose bulb",
                    price: 1299,
                    quantity: 4,
                    brand: "Philips",
                    weight: 77.0,
                    height: 12.6,
                    width: 6.2,
                    length: 6.2,
                    modelCode: "E27 ES",
                    colour: "Cool daylight",
                    imgUrl: "https://i.ibb.co/2nzwxnQ/bulb.png",
                    __typename: "ProductNode",
                },
            },
        },
    },
];

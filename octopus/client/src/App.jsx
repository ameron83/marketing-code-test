import React from "react";
import { Container } from "react-bootstrap";

import { BasketProvider } from "./basket/BasketProvider";
import { Header } from "./Header";
import { Item } from "./Item";
import { Footer } from "./Footer";

const App = () => (
    <Container className="wrapper">
        <BasketProvider>
            <Header />
            <Item />
        </BasketProvider>
        <Footer />
    </Container>
);

export default App;

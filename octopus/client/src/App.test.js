import React from "react";
import { render, waitForElement, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MockedProvider } from "@apollo/react-testing";

import { mocks } from "./util/mockData";
import App from "./App";

beforeEach(async () => {
    render(
        <MockedProvider mocks={mocks}>
            <App />
        </MockedProvider>
    );
    await waitForElement(() => new Promise((res) => setTimeout(res, 0)));
});

test("should be able to increase and decrease product quantity", async () => {
    const { queryByTestId, queryByText } = screen;
    const increaseBtn = queryByText("+");
    const decreaseBtn = queryByText("-");
    const qty = queryByTestId("qty");

    expect(increaseBtn).toBeInTheDocument();
    expect(decreaseBtn).toBeInTheDocument();
    expect(qty).toHaveTextContent("1");
    userEvent.click(increaseBtn);
    expect(qty).toHaveTextContent("2");
    userEvent.click(decreaseBtn);
    expect(qty).toHaveTextContent("1");
    userEvent.click(decreaseBtn);
    expect(qty).toHaveTextContent("1");
});

test("should be able to add items to the basket", async () => {
    const { queryByTestId, queryByText } = screen;
    const addBtn = queryByText("Add to cart");
    expect(addBtn).toBeInTheDocument();
    expect(queryByTestId("basket")).not.toBeInTheDocument();
    userEvent.click(addBtn);
    expect(queryByTestId("basket")).toBeInTheDocument();
    expect(queryByTestId("basket")).toHaveTextContent("1");
    userEvent.click(addBtn);
    expect(queryByTestId("basket")).toHaveTextContent("2");
});

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import Home from "./index";
import { updateIssue } from "../TicketCreation/ticketSlice"; // Update with the actual path
import reducer from "../TicketCreation/ticketSlice"; // Update with the actual path
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  /* your initial state */
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    // handle actions
    default:
      return state;
  }
};
// Mock the Redux store
const store = configureStore(myReducer);

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

// Mock the Modal component
jest.mock("../common/Modal", () => () => <div>Modal</div>); // Update with actual path

describe("Home Component", () => {
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    useSelector.mockReturnValue([
      { id: 1, description: "Test Ticket", status: "open" },
      { id: 2, description: "Closed Ticket", status: "closed" },
    ]);
  });

  test("renders component correctly", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(screen.getByText(/List of Reports/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Ticket/i)).toBeInTheDocument();
    expect(screen.getByText(/Closed Ticket/i)).toBeInTheDocument();
  });

  test("shows modal when handleConnect is called with an open ticket", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    // Simulate clicking the Connect button for the open ticket
    fireEvent.click(screen.getAllByText(/Connect/i)[0]);

    // Check that the modal is displayed
    expect(screen.getByText(/Modal/i)).toBeInTheDocument();
  });

  test("dispatches updateIssue action when handleConnect is called with a closed ticket", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    // Simulate clicking the Re-Open button for the closed ticket
    fireEvent.click(screen.getAllByText(/Re-Open/i)[0]);

    // Check that dispatch is called with the correct action
    expect(dispatch).toHaveBeenCalledWith(updateIssue(1)); // Note: Adjust the ID based on your test data
  });

  test("button text and class change based on ticket status", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const openButton = screen.getAllByText(/Connect/i)[0];
    const closedButton = screen.getAllByText(/Re-Open/i)[0];

    expect(openButton).toHaveClass("green-btn");
    expect(closedButton).toHaveClass("blue-btn");
  });
});

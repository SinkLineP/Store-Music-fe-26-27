import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Header from "./components/Header/Header";
import userEvent from "@testing-library/user-event";

describe("test app", () => {
  test("renders learn react link", () => {
    const initialState = {
      products: [],
      category: [],
      cart: [],
      order: [],
    };

    function playlist(state = initialState) {
      return state;
    }

    const store = createStore(playlist);

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    // const linkElement = screen.getByText(/HOME/i);
    // expect(linkElement).toBeInTheDocument();
  });

  test("header links", () => {
    const initialState = {
      products: [],
      category: [],
      cart: [],
      order: [],
    };

    function playlist(state = initialState) {
      return state;
    }

    const store = createStore(playlist);

    const {getByTestId} = render(<Provider store={store}>
        <App />
      </Provider>);
    const home = getByTestId("home-link") 
    const cd = getByTestId("cd-link") 
    const mp3 = getByTestId("mp3-link") 
    const mp4 = getByTestId("mp4-link") 
    const favorite = getByTestId("favorite-link") 
    
    userEvent.click(home);
    userEvent.click(cd);
    userEvent.click(mp3);
    userEvent.click(mp4);
    userEvent.click(favorite);
  });
});

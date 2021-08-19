import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import { CartProvider } from 'react-use-cart';


const initialState = {
  products: [],
  category: [],
  cart: [],
  order: []
};

function playlist(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PRODUCTS':
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case 'ADD_CATEGORY':
      return {
        ...state,
        category: [...state.category, action.payload]
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case 'DELETE_CART':
      return {
        ...state,
        cart: [state.cart, action.payload]
      }
    case 'ADD_ORDER':
      return {
        ...state,
        order: [...state.order, action.payload]
      }

    default:
      return state;
  }
}


const store = createStore(
  playlist,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);






store.subscribe(() => {
  console.log('subscribe', store.getState());
})



ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// ================================



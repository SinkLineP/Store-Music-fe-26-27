import React from "react";
import "./styles/ItemCart.scss";
import { useCart } from "react-use-cart";

const ItemCart = (props) => {
  const { addItem } = useCart();

  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-80 shadow">
        <img className="card-img-top img-fluid" src={props.itemImage}></img>
        <div className="card-body">
          <h5 className="card-title text-start">{props.itemTitle}</h5>
          <p className="card-text text-start desc-product-item">
            <i>{props.itemDesc}</i>
          </p>
          <p className="card-text text-start">
            <b>$ {props.itemPrice}</b>
            <button
              data-testid="button-cart"
              className="btn btn-success btn-cart-price"
              onClick={() => addItem(props.item)}
            >
              Add to Cart
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;

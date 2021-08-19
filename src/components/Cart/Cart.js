import React from 'react'
import "./style/cart.scss";
import { connect } from 'react-redux';
import OrderForm from '../orderForm/orderForm';
import { useCart } from 'react-use-cart';


const Cart = () => {
	const {
		isEmpty,
		totalUniqueItems,
		items,
		totalItems,
		cartTotal,
		updateItemQuantity,
		removeItem,
		emptyCart,
	} = useCart();

	if (isEmpty) return <h1 className="text-center">Your Cart is Empty!</h1>

	return (
		<section className="py-4 container">
			<div className="row justify-content-center">
				<div className="col-12">
					<h4 className="text-start">Cart: {totalUniqueItems} <br></br> Total Items: {totalItems}</h4>
					<table className="table table-light m-0">
						<tbody>
						<tr>
							<td>Image</td>
							<td>Title</td>
							<td>Price</td>
							<td>Quantity</td>
							<td></td>
						</tr>
							{items.map((item, index) => {
								return (
									<tr key={index}>
										<td>
											<img src={item.image} className="cart-image-item" />
										</td>
										<td>{item.title}</td>
										<td>{item.price}</td>
										<td>{item.quantity}</td>
										<td>
											<button
												className="btn btn-info ms-2"
												onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
											>-</button>
											<button
												className="btn btn-info ms-2"
												onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
											>+</button>
											<button
												className="btn btn-danger ms-2"
												onClick={() => removeItem(item.id)}
											>Remove Item</button>
										</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				</div>
				<div className="col-3 ms-auto">
					<h2 className="text-start">Total Price: $ {cartTotal} </h2>
				</div>
				<div className="col-9 text-end">
					<button
						className="btn btn-danger m-2"
						onClick={
							() => emptyCart()
						}
					>Clear Cart</button>
				</div>
				<hr></hr>
				<OrderForm />
			</div>
		</section>
	)
}





export default connect(
	state => ({
		storeCart: state.cart,
	}),
	dispatch => ({
		onAddCart: (trackName) => {
			dispatch({ type: 'ADD_TO_CART', payload: trackName })
		},
	})
)(Cart)
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import "./orderForm.scss";
import { connect } from 'react-redux';
import axios from "axios"
import { useCart } from 'react-use-cart';
import ModalOrder from '../ModalOrder/ModalOrder';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from "react-router-dom";



const OrderForm = () => {
    const { items, emptyCart, cartTotal } = useCart()


    const validationsSchema = yup.object().shape({
        firstName: yup.string().typeError('It`s input string!').required('Enter your name!'),
        lastName: yup.string().typeError('It`s input string').required('Enter your Last Name!'),
        age: yup.number().typeError('It`s input number').required('Enter your age!'),
        address: yup.string().typeError('It`s input string').required('Enter your address!'),
        phoneNumber: yup.number().typeError('It`s input number').required('Enter your phone number!')
    })

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="order-block">
            <h1>Order</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    age: '',
                    address: '',
                    phoneNumber: '',
                }}
                validateOnBlur
                onSubmit={(values) => {

                    const orderItem = {
                        client: values,
                        product: items,
                        totalPrice: cartTotal
                    }

                    axios.post("http://localhost:4000/order", orderItem)
                        .then(res => res)
                        .catch(err => err)

                    this.props.onAddToOrder(values)


                }}
                validationSchema={validationsSchema}>
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => {
                    return (<div className={'form'}>
                        {/* Name */}
                        <p>
                            <label htmlFor={'firstName'}>First Name</label><br></br>
                            <input
                                type={'text'}
                                name={'firstName'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.firstName}
                            />
                        </p>
                        {touched.firstName && errors.firstName && <p className="errors">{errors.firstName}</p>}
                        {/* Last Name */}
                        <p>
                            <label htmlFor={'lastName'}>Last Name</label><br></br>
                            <input
                                type={'text'}
                                name={'lastName'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastName}
                            />
                        </p>
                        {touched.lastName && errors.lastName && <p className="errors">{errors.lastName}</p>}
                        {/* Age */}
                        <p>
                            <label htmlFor={'age'}>Age</label><br></br>
                            <input
                                type={'text'}
                                name={'age'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.age}
                            />
                        </p>
                        {touched.age && errors.age && <p className="errors">{errors.age}</p>}
                        {/* Address */}
                        <p>
                            <label htmlFor={'address'}>Address</label><br></br>
                            <input
                                type={'text'}
                                name={'address'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.address}
                            />
                        </p>
                        {touched.address && errors.address && <p className="errors">{errors.address}</p>}
                        {/* Phone Number */}
                        <p>
                            <label htmlFor={'phoneNumber'}>Phone Number</label><br></br>
                            <input
                                type={'text'}
                                name={'phoneNumber'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phoneNumber}
                            />
                        </p>
                        {touched.phoneNumber && errors.phoneNumber && <p className="errors">{errors.phoneNumber}</p>}
                        <button
                            className="btn btn-success"
                            disabled={!isValid && !dirty}
                            onClick={() => {
                                handleSubmit()
                                setModalShow(true)
                            }}
                            type={'submit'}
                        >Checkout</button>
                    </div>)

                }}
            </Formik>
            <ModalOrder
                show={modalShow}
                onHide={
                    () => {
                        setModalShow(false)
                        emptyCart()
                    }}
                linkTo={
                    <Link onClick={
                        () => {
                            setModalShow(false)
                            emptyCart()
                        }
                    }
                        className="text-decoration-none btn btn-primary"
                        to="/home"
                    >Continue shopping</Link>
                }
            />
        </div>
    )

}



export default connect(
    state => ({
        storeCart: state.cart,
    }),
    dispatch => ({
        onDeleteCart: (deleteItem) => {
            dispatch({ type: 'DELETE_CART', payload: deleteItem })
        },
        onAddToOrder: (order) => {
            dispatch({ type: 'ADD_ORDER', payload: order })
        },
        onAddCart: (addCartItem) => {
            dispatch({ type: 'ADD_TO_CART', payload: addCartItem })
        }
    })
)(OrderForm)
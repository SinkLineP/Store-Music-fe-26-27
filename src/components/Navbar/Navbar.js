/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
// no-unused-vars
import React from 'react';
import "./styles/Navbar.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useCart } from 'react-use-cart';


const Navbar = (props) => {

    const {
        totalUniqueItems
    } = useCart()

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">MStore</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <span className="navbar-text navbar-cart">
                        {props.children}
                        {totalUniqueItems}
                    </span>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;
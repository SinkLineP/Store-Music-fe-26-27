import React, { Component } from 'react';
import { BrowserRouter as Link, Router } from "react-router-dom";
import "./styles/Header.scss";
import diskIcon from "./images/disk.png";

export default class Header extends Component {


    render() {
    const {children} = this.props

        return (
            <div className="header">
                <div className="header-logo">
                    <img href="#" src={diskIcon}></img>
                    <span className="header-title-M">M</span>
                    <span className="header-title">Store</span>
                </div>
                <div className="header-links">
                        {children}
                </div>
            </div>

        );
    }
}
import React, { Component } from 'react'
import icons from "./images/03.svg";
import "./styles/Category.scss"

export default class Category extends Component {
    render() {
        const { categoryTitle, categoryContent, background, iconsCategory, key} = this.props;
        
        return (
            <div className={background} key={key}>
                <div>
                    <p className="category-title">{categoryTitle}</p>
                    <p className="category-content">{categoryContent}</p>
                </div>
            </div>
        )
    }
}

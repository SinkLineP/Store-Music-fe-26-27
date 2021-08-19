/* eslint-disable eqeqeq */
import '../../App.css';
import React, { PureComponent, useState } from 'react';
import Slider from '../Slider/Slider';
import Welcome from '../Welcome/Welcome';
import Publishers from '../Publishers/Publishers';
import Category from '../Category/Category';
import Fragment from '../Fragment/Fragment';
import TitlePublisher from '../TitlePublisher/TitlePublisher';
import axios from 'axios';
import { connect } from 'react-redux';
// cart
import ItemCart from '../ItemCart/ItemCart';




class Home extends PureComponent {
  render() {
    return (
      <div className="App">

        
        <Slider />
        <Welcome />
        <Fragment>
          <div>
            {this.props.storeCategory.map(el => {
              const { categorytitle, categorycontent, categorybackgroundColor } = el;

              return (
                <>
                  <Category categoryTitle={categorytitle} categoryContent={categorycontent} background={categorybackgroundColor} /><span>  </span>
                </>
              )
            })}
          </div>
        </Fragment>
        <TitlePublisher titlePublisher={"Latest arrivals in musica"} />
        <Fragment>
          <section className="py-4 container">
            <div className="row justify-content-center">
              {this.props.storeProducts.map((item, index) => {
                return (
                  <ItemCart
                    itemImage={item.image}
                    itemTitle={item.title}
                    itemDesc={item.content}
                    itemPrice={item.price}
                    item={item}
                    key={index}
                  />
                )
              })}
            </div>
          </section>
        </Fragment>

        <TitlePublisher titlePublisher={"Our most important publishers"} />
        <Fragment>
          <div className="container">
            <Publishers /><span className="size-under">  </span>
            <Publishers /><span className="size-under">  </span>
            <Publishers /><span className="size-under">  </span>
            <Publishers /><span className="size-under">  </span>
            <Publishers /><span className="size-under">  </span>
            <Publishers />
          </div>
        </Fragment>
      </div>
    );
  };
};





export default connect(
  state => ({
    storeCategory: state.category,
    storeProducts: state.products

  }),
  dispatch => ({
    onAddToCart: (trackName) => {
      dispatch({ type: 'ADD_TO_CART', payload: trackName })
    }
  })
)(Home);











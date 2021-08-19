// eslint-disable-next-line
import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRoutes from './routes/AppRoutes.jsx';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from "react-router-dom";
import cartIcon from "./components/Navbar/images/cart-icon.png";
import axios from "axios";
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {

  showModal = () => {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  addCart = () => {
    this.setState({ show: false });
  }

  async componentDidMount() {
    const responseProducts = await axios.get("http://localhost:4000/products");
    responseProducts.data.map(item => {
      this.props.onAddProducts(item);
    })

    const responseCategory = await axios.get("http://localhost:4000/category");
    responseCategory.data.map(item => {
      this.props.onAddCategory(item);
    })

    const responseCart = await axios.get('http://localhost:4000/cart');
		responseCart.data.map(item => {
			this.props.onAddToCart(item);
		})
  }

  render() {

    return (
      <div className="App">
        <Router>
          <Navbar>
            {
              <>
                <Link to="/cart">
                  <img src={cartIcon}></img>
                </Link>
              </>
            }
          </Navbar>
          <Header>
            {
              <>
                <Link to="/home" data-testid="home-link">HOME</Link>
                <Link to="/cd" data-testid="cd-link">CD`s</Link>
                <Link to="/mp3" data-testid="mp3-link">MP3</Link>
                <Link to="/mp4" data-testid="mp4-link">MP4</Link>
                <Link to="/favorite" data-testid="favorite-link">Favorite</Link>
              </>
            }
          </Header>

            

          <AppRoutes />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    onAddProducts: (trackName) => {
      dispatch({ type: 'ADD_PRODUCTS', payload: trackName })
    },
    onAddCategory: (trackName) => {
      dispatch({ type: 'ADD_CATEGORY', payload: trackName })
    },
    onAddToCart: (trackName) => {
      dispatch({ type: 'ADD_TO_CART', payload: trackName })
    }
  })
)(App);




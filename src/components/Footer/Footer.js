import React, { Component } from 'react';
import "./styles/Footer.scss";
import facebookIcon from "./images/facebook-icon.png";
import instagramIcon from "./images/instagram-icon.png";
import tiktokIcon from "./images/tiktok-icon.svg";

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-up-line"></div>
                <div className="footer-content">
                    <div className="about">
                        <div className="about-us">
                            <h4 className="about-us-title">Little about us</h4>
                            <p className="about-us-content">
                                <span>Sed posuere</span> consectetur est at.<br></br>
                                Nulla vitae elit libero, a pharetra.<br></br>
                                Lorem ipsum <span>dolor sit</span> amet, conse<br></br>
                                ctetuer adipiscing elit.
                            </p>
                        </div>
                        <div className="socialize">
                            <h4 className="socialize-title">Socialize with us</h4>
                            <div className="socialize-link-icons">
                                <div><img src={facebookIcon}></img></div>
                                <div><img src={instagramIcon}></img></div>
                                <div><img src={tiktokIcon}></img></div>
                            </div>
                        </div>
                    </div>
                    <div className="archives">
                        <h4 className="archives-title">Our Archives</h4>
                        <div className="archives-date">
                            <p>March 2012</p>
                            <p>..............................................................</p>
                            <p>February 2012</p>
                            <p>..............................................................</p>
                            <p>January 2012</p>
                            <p>..............................................................</p>
                            <p>December 2011</p>
                        </div>
                    </div>
                    <div className="popular-posts">
                        <h4 className="popular-posts-title">Popular Posts</h4>
                        <br></br>
                        <div className="popular-posts-block">
                            <img className="popular-posts-image" src="publishers" src="https://picsum.photos/800/304/?random"></img>
                            <p className="popular-posts-album-title">Great Album</p>
                            <p className="popular-posts-album-comment">12&nbsp;comment</p>
                        </div>
                        <div className="popular-posts-block">
                            <img className="popular-posts-image" src="publishers" src="https://picsum.photos/800/305/?random"></img>
                            <p className="popular-posts-album-title">Great Album</p>
                            <p className="popular-posts-album-comment">12&nbsp;comment</p>
                        </div>
                    </div>
                    <div className="search-block">
                        <div className="search">
                            <h4 className="search-title">Search our Site</h4>
                            <input placeholder="Enter Search..."></input>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

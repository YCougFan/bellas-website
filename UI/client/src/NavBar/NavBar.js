import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './NavBar.css';

import HomePage from "../HomePage";
import Menu from './Menu/Menu'
import Catering from "./Catering";
import OurRoots from "./OurRoots";
import GivingBack from "./GivingBack";
import Employment from "./Employment";
import ContactUs from "./ContactUs/ContactUs";

class NavBar extends Component {
    render() {
        return (
            <Router>
                <div className="nav-menu">
                    <ul className="nav-box">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link className="menu" to="/menu">Menu</Link>
                        </li>
                        <li>
                            <Link to="/catering">Catering</Link>
                        </li>
                        <li>
                            <Link to="/about">Our Roots</Link>
                        </li>
                        <li>
                            <Link to="/pay-it-forward">Giving Back</Link>
                        </li>
                        <li>
                            <Link to="/employment">Employment</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={HomePage} />
                    <Route path="/menu" component={Menu} />
                    <Route path="/catering" component={Catering} />
                    <Route path="/about" component={OurRoots} />
                    <Route path="/pay-it-forward" component={GivingBack} />
                    <Route path="/employment" component={Employment} />
                    <Route path="/contact" component={ContactUs} />
                </div>
            </Router>
        );
    }
}

export default NavBar;
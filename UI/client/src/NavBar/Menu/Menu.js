import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Appetizers from "./Appetizers";
import Entrees from "./Entrees";
import HealthWise from "./HealthWise";
import SoupsSalads from "./SoupsSalads";
import GlutenFree from "./GlutenFree";
import LunchSpecials from "./LunchSpecials";

class Menu extends Component {
    render() {
        return (
            <Router>
                <div className="menu-nav">
                    <ul className="menu-nav-box">
                        <li>
                            <Link to="/appetizers">Appetizers</Link>
                        </li>
                        <li>
                            <Link to="/entrees">Entrees</Link>
                        </li>
                        <li>
                            <Link to="/health-wise">Health Wise</Link>
                        </li>
                        <li>
                            <Link to="/soups-salads">Soups & Salads</Link>
                        </li>
                        <li>
                            <Link to="/gluten-free">Gluten Free</Link>
                        </li>
                        <li>
                            <Link to="/lunch">Lunch Specials</Link>
                        </li>
                        <li>
                            <Link to="/breakfast">Breakfast</Link>
                        </li>
                        <li>
                            <Link to="/sides">Sides</Link>
                        </li>
                        <li>
                            <Link to="/beverages">Beverages</Link>
                        </li>
                        <li>
                            <Link to="/desserts">Desserts</Link>
                        </li>
                        <li>
                            <Link to="/to-go">To Go Items</Link>
                        </li>
                    </ul>

                    <hr />

                    <Route path="/appetizers" component={Appetizers} />
                    <Route path="/entrees" component={Entrees} />
                    <Route path="/health-wise" component={HealthWise} />
                    <Route path="/soups-salads" component={SoupsSalads} />
                    <Route path="/gluten-free" component={GlutenFree} />
                    <Route path="/lunch" component={LunchSpecials} />
                </div>
            </Router>
        );
    }
}

export default Menu
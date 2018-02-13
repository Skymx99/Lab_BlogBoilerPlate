import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class NavMenu extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <nav className="navbar navbar-dark ">


                <Link to="/" className="navbar-brand">Alex Lewis Blog</Link>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-info my-2 my-sm-0" type="submit">Search</button>
                </form>

            </nav>

        );
    }
}

export default NavMenu;











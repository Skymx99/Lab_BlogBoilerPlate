import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './header';
import Blogs from './blogs';
import NavMenu from './navMenu';
import ViewPost from './viewPost';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <NavMenu />
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Blogs} />
                        <Route path="/blogs/:id" component={ViewPost} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;
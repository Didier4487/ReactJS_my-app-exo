import React, { Component } from 'react';
import {Router, Route, Redirect} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'; // history n'a pas d'index, il faut mettre le chemin complet

// que sur localhost:3000/about
import About from './About/About.js';
// sur localhost:3000/home et sur localhost:3000/
import Home from './Home/Home.js';
// que sur localhost:3000/
import Header from './Header/Header.js';
// sur toutes les pages : localhost:3000/*
import Nav from './Nav/Nav.js';
// si userConnected = true
import Profil from './Profil/Profil.js'

const history = createBrowserHistory();

class RouterComponent extends Component {

  componentWillMount() {
    // $.post('www.site.com/api/authenticate', function(data) {
    //   if (data) {userConnected = true;}
    // });
    this.setState({
      userConnected: true
    });
  }

  render() {
    return (
      /* Router ne peut pas avoir de sibling et ne peut avoir qu'un enfant */
      <Router history={history}>
        <div>
          {/* s'affiche uniquement si l'url est "/" */}
          <Route exact path="/" component={Header} />
          {/* s'affiche dès qu'il y a "/" dans l'url */}
          <Route path="/" component={Nav} />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route exact path="/profil" component={Profil} />
          {
            this.state.userConnected ? (
              <Redirect to="/profil" />
            ) : (
              <Redirect to="/" />
            )
          }
        </div>
      </Router>
    );
  }
}

export default RouterComponent;

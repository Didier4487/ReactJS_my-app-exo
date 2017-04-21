import React, {Component} from 'react';
import {Router, Route} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory.js';
import 'semantic-ui-css/semantic.min.css';

// import des différents components de l'app
import Items from './Items/Items.js';
import Head from './Head/Head.js';
import Nav from './Nav/Nav.js';
import Home from './Home/Home.js';
import About from './About/About.js';
import Evts from './Evts/Evts.js';
import Foot from './Foot/Foot.js';

const history = createBrowserHistory();
class Site extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route path="/" component={Head} />
          <Route path="/" component={Nav} />
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/galery" component={Items} />
          <Route path="/about" component={About} />
          <Route path="/evts" component={Evts} />
          <Route path="/" component={Foot} />
        </div>
      </Router>
    )
  }
}

export default Site;

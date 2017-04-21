import React, { Component } from 'react';

import './App.css';
// import Test from './Test/Test.js';
// import Shop from './Shop/Shop.js';
// import RouterComponent from './Router/RouterComponent.js';
import Site from './Site/Site.js';

class App extends Component {

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
      /* commentaires comme en CSS */
      <div>
        <Site />
        {/* <Test who="Olga" adj="smart" /> */}
        {/* <Shop /> */}
        {/* Router ne peut pas avoir de sibling et ne peut avoir qu'un enfant */}
        {/* <RouterComponent /> */}
      </div>
    );
  }
}

export default App;

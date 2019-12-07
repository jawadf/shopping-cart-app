import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomeScreen from './components/HomeScreen';
import ShowProduct from './components/ShowProduct';
import history from './history';

const App: React.FC = () => {

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/products/:id" component={ShowProduct} />
      </Switch>
    </Router>
);
}

export default App;

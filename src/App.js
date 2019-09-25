import React, { Fragment } from 'react';
import './App.css';
import { Globalstyle } from './style';
import Header from './common/header/index';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import Write from './pages/write'

function App() {
  return (
    <Fragment>
      <Globalstyle></Globalstyle>
      <Header/>
      <Router>
        <Route path="/" exact component={Home}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/write" component={Write}></Route>
        <Route path="/detail/:id" component={Detail}></Route>
      </Router>
    </Fragment>
  );
}

export default App;

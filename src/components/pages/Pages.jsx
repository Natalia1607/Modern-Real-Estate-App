import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from '../common/header/Header';
import Home from '../home/Home';
import Footer from '../common/footer/Footer';
import About from '../about/About';
import Services from '../services/Services';
import Blog from '../blog/Blog';
import Pricing from '../pricing/Pricing';

const Pages = () => {
  return (
    <>
        <Router>
            <Header />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/services' component={Services}/>
                <Route exact path='/blog' component={Blog}/>
                <Route exact path='/pricing' component={Pricing}/>
            </Switch>
            <Footer />
        </Router>
    </>
  )
}

export default Pages
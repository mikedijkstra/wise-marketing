import React, { Component } from 'react';
import { Route } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";

import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

class App extends Component {
  constructor() {
    super()

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.setTimeout(function() {
      document.body.classList.remove('preload')
    }, 1);

    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    let scrollTop = window.scrollY
    let windowHeight = window.innerHeight/2
    if (scrollTop > windowHeight/2) {
      document.body.classList.add('is-scrolled')
    } else {
      document.body.classList.remove('is-scrolled')
    }
  }

  render() {
    return (
      <div className="app">
        <div>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

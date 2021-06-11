import React, {Component} from 'react';
import '../App.css';
import Header from "./Header.js";
import Footer from "./Footer.js";
import MainPage from "./MainPage.js";

export default class App extends Component {
  
  componentWillMount() {
  
  }
  
  componentWillUpdate(nextProps, nextState, nextContext) {
  
  }
  
  render() {
    return (
      <div className="App">
        <MainPage/>
      </div>
    );
  }
}


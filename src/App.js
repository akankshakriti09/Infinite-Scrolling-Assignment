import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Menu from './components/Menu';

export default class App extends Component {
  limit=10;
  render() {
    return (
      <div>
        {/* Component added here */}
        <Navbar/>
        <Menu limit={this.limit}/>
      </div>
    )
  }
}

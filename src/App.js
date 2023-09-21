import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import RestroMenu from './components/RestroMenu';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <RestroMenu/>
      </div>
    )
  }
}

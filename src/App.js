import React, { Component } from 'react'
import './App.css'
import CssBaseLine from '@material-ui/core/CssBaseline'
import Card from './card'
import Deck from './deck'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <CssBaseLine />
        <h1>Card Dealer</h1>
        <Deck />
      </div>
    )
  }
}

export default Deck

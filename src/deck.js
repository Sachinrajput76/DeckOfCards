import React, { Component } from 'react'
import './deck.css'
import FavoriteIcon from '@material-ui/icons/Favorite'

import axios from 'axios'
import Card from './card'
const Api_Base_Url = 'https://deckofcardsapi.com/api/deck/'
class Deck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deck: null,
      drawn: [],
    }
    this.getCard = this.getCard.bind(this)
  }
  async componentDidMount() {
    let deck = await axios.get(`${Api_Base_Url}/new/shuffle/`)
    this.setState({ deck: deck.data })
  }

  async getCard() {
    let id = this.state.deck.deck_id
    try {
      let cardUrl = `${Api_Base_Url}/${id}/draw/`
      let cardRes = await axios.get(`${cardUrl}`)

      if (cardRes.data.success === false) {
        throw new Error('no card remaining')
      }

      let card = cardRes.data.cards[0]

      this.setState((st) => ({
        drawn: [
          ...st.drawn,
          {
            id: card.code,
            image: card.image,
            name: `${card.value} of ${card.suit}`,
          },
        ],
      }))
      console.log(cardRes.data)
    } catch (err) {
      alert(err)
    }
  }
  render() {
    const card = this.state.drawn.map((st) => (
      <Card image={st.image} name={st.name} />
    ))
    return (
      <div className='Deck'>
        <h1 className='Deck-title'>
          <FavoriteIcon /> Card Dealer <FavoriteIcon />
        </h1>
        <h2 className='Deck-title Subtitle'>A Little Demo Made With React</h2>
        <button className='Deck-btn' onClick={this.getCard}>
          Get Card
        </button>
        <div className='CardBox'>{card}</div>
      </div>
    )
  }
}

export default Deck

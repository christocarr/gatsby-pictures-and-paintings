import React, { Component } from 'react'

import Button from '../components/BuyButton'

class Product extends Component {
  render() {
    return (
      <div>
        <img src={this.props.src} alt={this.props.alt} />
        <Button id={this.props.id} />
      </div>
    )
  }
}

export default Product
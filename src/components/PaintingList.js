import React, { Component } from 'react'
import Painting from './Painting'

export default class PaintingList extends Component {
  state = {
    paintings: []
  }

  componentDidMount() {
    this.setState({
      paintings: this.props.paintings.edges
    })
  }
  
  render() {
    return (

      this.state.paintings.map(({ node }) => {
        return (
          <Painting painting={ node } key={ node.id }/>
        )
      })
    )
  }
}


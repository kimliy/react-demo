import React, { Component } from 'react'
import { WriterWrapper } from '../style'
import imgUrl from '../../../static/home.jpg'

class Write extends Component {
  render() {
    return (
      <WriterWrapper imgUrl={imgUrl}></WriterWrapper>
    )
  }
}

export default Write
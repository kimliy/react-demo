import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  RecommentWrap,
  RecommentItem
} from '../style'

class Recomment extends Component {
  render() {
    return (
      <RecommentWrap>
        {this.props.recommendList.map(item => (
          <RecommentItem imgUrl={item.get('imgUrl')} key={item.get('id')} />
        ))}
      </RecommentWrap>
    )
  }
}

const mapState = (state) => {
  return {
    recommendList: state.getIn(['home', 'recommendList'])
  }
}

export default connect(mapState, null)(Recomment)
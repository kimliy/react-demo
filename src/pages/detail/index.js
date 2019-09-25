import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
  DetailWrap, Header, Content
} from './style'

class Detail extends Component {
  render() {
    const { title, content } = this.props
    return (
      <DetailWrap>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{__html: content}}></Content>
      </DetailWrap>
    )
  }
  componentDidMount() {
    // console.log(this.props.match)
    this.props.getDetailList(this.props.match.params.id)
  }
}

const mapState = (state) => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    getDetailList(id) {
      dispatch(actionCreators.getDetail(id))
    }
  }
}

export default connect(mapState, mapDispatch)(Detail)
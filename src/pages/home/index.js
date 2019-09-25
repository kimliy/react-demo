import React, { Component } from 'react'
import imgUrl from '../../static/home.jpg'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'
import {
  HomeWrap,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'
import Topic from './components/Topic'
import List from './components/List'
import Recomment from './components/Recomment'
import Write from './components/Write'

class Home extends Component {
  handleClick() {
    // 平滑滚动
    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
  }
  render() {
    const { login } = this.props
    if (login) {
      return (
        <HomeWrap>
          <HomeLeft>
            <img className='banner-img' alt='' src={imgUrl} />
            <Topic />
            <List />
          </HomeLeft>
          <HomeRight>
            <Recomment />
            <Write />
          </HomeRight>
          {this.props.showScroll ? <BackTop onClick={() => this.handleClick()}><i className="iconfont icon-up"></i></BackTop> : null}
        </HomeWrap>
      )
    } else {
      return (
        <Redirect to="/login"></Redirect>
      )
    }
  }
  componentDidMount() {
    this.props.getHomeList()
    this.bindEvent()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
  bindEvent() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) => {
  return {
    showScroll: state.getIn(['home', 'showScroll']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    getHomeList() {
      dispatch(actionCreators.getHomeList())
    },
    changeScrollTopShow() {
      if (document.documentElement.scrollTop > 300) {
        dispatch(actionCreators.changeScrollShow(true))
      } else {
        dispatch(actionCreators.changeScrollShow(false))
      }
    }
  }
}

export default connect(mapState, mapDispatch)(Home)
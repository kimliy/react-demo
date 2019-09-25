import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Redirect } from 'react-router-dom'
import {
  LoginWrap, LoginBox, Input, Button
} from './style'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: ''
    }
  }
  render () {
    const { loginStatus } = this.props
    if (!loginStatus) {
      return (
        <LoginWrap>
          <LoginBox>
            <Input placeholder="账号" onChange={this.handleChangeName} value={this.state.name}></Input>
            <Input placeholder="密码" onChange={this.handleChangePwd} value={this.state.password}></Input>
            <Button onClick={() => this.props.login({name: this.state.name, password: this.state.password})}>登录</Button>
          </LoginBox>
        </LoginWrap>
      )
    } else {
      return (
        <Redirect to="/"></Redirect>
      )
    }
  }
  handleChangeName = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  handleChangePwd = (e) => {
    this.setState({
      password: e.target.value
    })
  }
}

const mapState = (state) => {
  return {
    // 这里起名还是换个名字 不然和dispatch里的login重名
    loginStatus: state.getIn(['login', 'login'])
  }
}
const mapDispatch = (dispatch) => {
  return {
    login(data) {
      dispatch(actionCreators.login(data))
    }
  }
}

export default connect(mapState, mapDispatch)(Login)
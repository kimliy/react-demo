import axios from 'axios'
import { actionTypes } from './index'

export const changeLogin = (data) => ({
  type: actionTypes.CHANGE_LOGIN,
  data
})

export const login = (data) => {
  return (dispatch) => {
    if (!data.name || !data.password) return alert("请输入账号或者密码")
    axios.get(`/api/login.json?name=${data.name}&${data.password}`).then(res => {
      if (res.status === 200) {
        localStorage.setItem('isLogin', true)
        dispatch(changeLogin(res.data.data))
      }
    })
  }
}

export const logout = () => ({
  type: actionTypes.LOGOUT
})
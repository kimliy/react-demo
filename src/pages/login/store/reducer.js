import { fromJS } from 'immutable'
import { actionTypes } from './index'

const defaultState = fromJS({
  login: localStorage.getItem('isLogin') || false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN:
      return state.set('login', action.data)
    case actionTypes.LOGOUT:
      localStorage.removeItem('isLogin')
      return state.set('login', false)
    default:
      return state
  }
}
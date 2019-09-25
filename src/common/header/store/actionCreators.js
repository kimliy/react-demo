import { actionTypes } from './index'
import axios from 'axios'
import { fromJS } from 'immutable';

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})

export const changeFocusAction = (data) => ({
  type: actionTypes.CHANGE_FOCUS,
  data
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/hotList.json').then(res => {
      if (res.status === 200) {
        dispatch(changeList(res.data.data));
      }
    }).catch(err => {
      console.log(err);
    })
  }
}

export const changeMouseAction = (data) => ({
  type: actionTypes.CHANGE_MOUSE,
  data
})

export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
})
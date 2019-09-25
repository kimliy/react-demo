import { actionTypes } from './index'
import axios from 'axios'
import {fromJS} from 'immutable'

const getHome = (data) => ({
  type: actionTypes.HOME_LIST,
  topicList: fromJS(data.topicList),
  articleList: fromJS(data.articleList),
  recommendList: fromJS(data.recommendList)
})

const getMore = (data, page) => ({
  type: actionTypes.MORE_LIST,
  list: fromJS(data),
  nextPage: fromJS(page)
})

export const getHomeList = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      if (res.status === 200) {
        dispatch(getHome(res.data.data))
      }
    }).catch(err => {
      console.log(err)
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/more.json?page=' + page).then(res => {
      if (res.status === 200) {
        const { data } = res.data
        if (!data.length) {
          alert("没有更多数据了！！！")
          return
        }
        dispatch(getMore(data, page + 1))
      }
    })
  }
}

export const changeScrollShow = (data) => ({
  type: actionTypes.CHANGE_SHOWSCROLL,
  data
})
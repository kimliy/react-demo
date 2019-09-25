import { actionTypes } from './index'
import axios from 'axios'

const getList = (data) => ({
  type: actionTypes.GET_DETAIL,
  title: data.title,
  content: data.content
})

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get(`/api/detail.json?id=${id}`).then(res => {
      if (res.status === 200) {
        dispatch(getList(res.data.data))
      }
    }).catch(err => {
      console.log(err)
    })
  }
}
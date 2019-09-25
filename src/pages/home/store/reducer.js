import { fromJS } from 'immutable'
import  {actionTypes} from './index'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  page: 1,
  showScroll: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.HOME_LIST:
      return state.merge({
        topicList: action.topicList,
        articleList: action.articleList,
        recommendList: action.recommendList
      })
    case actionTypes.MORE_LIST:
      return state.merge({
        articleList: state.get('articleList').concat(action.list),
        page: action.nextPage
      })
    case actionTypes.CHANGE_SHOWSCROLL:
      return state.set('showScroll', action.data)
    default:
      return state
  }
}
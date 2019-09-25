import { actionTypes } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_FOCUS: 
      return state.set('focused', action.data);
    case actionTypes.CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case actionTypes.CHANGE_MOUSE:
      return state.set('mouseIn', action.data);
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state;
  }
}
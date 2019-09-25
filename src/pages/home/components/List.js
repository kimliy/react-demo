import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionCreators } from '../store'
import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style'

class List extends Component {
  render() {
    const { articleList, getMore, page } = this.props
    return (
      <div>
        {articleList.map((item, index) => (
          <Link key={index} to={`/detail/${item.get('id')}`}>
            <ListItem>
              <img className="pic" src={item.get('imgUrl')} alt="" />
              <ListInfo>
                <h3 className="title">{item.get('title')}</h3>
                <p className="desc">{item.get('desc')}</p>
              </ListInfo>
            </ListItem>
          </Link>
         )
        )}
        <LoadMore onClick={() => getMore(page)}>加载更多</LoadMore>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'page'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    getMore(page) {
      dispatch(actionCreators.getMoreList(page))
    }
  }
}

export default connect(mapState, mapDispatch)(List)
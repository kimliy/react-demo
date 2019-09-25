import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from '../header/store';
import { logout } from '../../pages/login/store/actionCreators'
import {
  HeaderWrap,
  Logo,
  Nav,
  NavItem,
  SearchWrap,
  NavSearch,
  Addition,
  Button,
  SearchInfo,
  SearchTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from './style'

class Header extends Component {
  constructor(props) {
    super(props)
    this.spinIcon = React.createRef()
    Header._this = this
  }
  render() {
    const { focused, handleOnFocus, handleOnBlur, list, login, logout } = this.props
    return (
      <HeaderWrap>
        <Logo/>
        <Nav>
          <NavItem className="left active">
            <i className="iconfont icon-zhinanzhen-copy"></i>
            首页
          </NavItem>
          <NavItem className="left download">下载App</NavItem>
          {login ? <NavItem className="right" onClick={logout}>退出登录</NavItem> : <NavItem className="right">登录</NavItem> }
          <NavItem className="right">
            <i className="iconfont icon-zuanshi"></i>
          </NavItem>

          <SearchWrap>
            <CSSTransition
              timeout={200}
              in={focused}
              classNames="slide"
            >
              <NavSearch 
                className={focused ? 'focused' : ''}
                onFocus={() => handleOnFocus(list)}
                onBlur={handleOnBlur}
              />
            </CSSTransition>
            <i className={focused ? 'iconfont icon-sousuo focused' : 'iconfont icon-sousuo'}></i>
          </SearchWrap>

          {
            this.getList()
          }
        </Nav>

        <Addition>
          <Button className="register">注册</Button>
          <Button className="writting">
            <i className="iconfont icon-yumao" style={{marginRight: '4px'}}></i>
            写文章
          </Button>
        </Addition>
      </HeaderWrap>
    )
  }
  getList() {
    const { focused, list, page, totalPage, handleMouse, mouseIn, handleChangePage } = this.props;
    const newList = list.toJS();
    const pageList = [];

    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
      }
    }

    // console.log(pageList)
    // 鼠标停留在上面 这个提示框也存在（不然点击换一换会消失）
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={() => handleMouse(true)}
          onMouseLeave={() => handleMouse(false)}
        >
          <SearchTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>
              <i className="iconfont icon-huanyihuan" ref={this.spinIcon}></i>
              换一批
            </SearchInfoSwitch>
          </SearchTitle>
          <SearchInfoList>
            {/* {[1, 2, 3, 4, 5]} jsx可以直接放数组 */}
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleOnFocus(list) {
      // console.log(list)
      (list.size === 0) && dispatch(actionCreators.getList());
      dispatch(actionCreators.changeFocusAction(true));
    },
    handleOnBlur() {
      dispatch(actionCreators.changeFocusAction(false));
    },
    handleMouse(data) {
      dispatch(actionCreators.changeMouseAction(data));
    },
    handleChangePage(page, totalPage) {
      console.log(Header._this.spinIcon.current.style.transform)
      let angle = Header._this.spinIcon.current.style.transform.replace(/[^0-9]/ig, '') // 是个字符串
      if (angle) {
        angle = parseInt(angle, 10)
      } else {
        angle = 0
      }
      Header._this.spinIcon.current.style.transform = `rotate(${angle + 360}deg)`
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout() {
      dispatch(logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
import styled from 'styled-components';
import logoImg from '../../static/logo.png'

const HeaderWrap = styled.div `
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  user-select: none;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  /* 不设置白底部内容滚动上会看得到 */
  background: #fff;
`
const Logo = styled.a.attrs({
  href: '/'
})`
  display: inline-block;
  height: 56px;
  width: 100px;
  position: absolute;
  left: 0;
  top: 0;
  background-image: url(${logoImg});
  background-size: contain;
`
const Nav = styled.div `
  width: 960px;
  height: 100%;
  margin: 0 auto;
  position: relative;
`
const NavItem = styled.div `
  height: 56px;
  padding: 15px ;
  line-height: 26px;
  font-size: 17px;
  color: #333;
  cursor: pointer;
  box-sizing: border-box;
  &.left {
    float: left;
    margin-right: 10px;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color:#ea6f5a; 
  }
  &.download:hover{
    background-color: #f5f5f5;
  }
  .icon-zhinanzhen-copy, .icon-zuanshi {
    color: #ea6f5a;
    font-size: 20px;
    margin-right: 5px;
    vertical-align: middle;
  }
`
const SearchWrap = styled.div `
  float: left;
  position: relative;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 50%;
    text-align: center;
    &.focused {
      color: #fff;
      background-color: #777;
    }
  }
`
const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})` 
  width: 240px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  border: none;
  border-radius: 19px;
  padding: 0 35px 0 20px;
  color: #777;
  background-color: #eee;
  font-size: 14px;
  outline: none;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 280px;
  }
  &.slide-enter {
    width: 240px;
    transition: all 0.3s linear;
  }
  &.slide-enter-active {
    width: 280px;
  }
  &.slide-exit {
    width: 280px;
    transition: all 0.3s linear;
  }
  &.slide-exit-active {
    width: 240px;
  }
`

const Addition = styled.div `
  height: 56px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
`
const Button = styled.div `
  line-height: 35px;
  margin-right: 20px;
  padding: 0 20px;
  border-radius: 19px;
  cursor: pointer;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.register {
    color: #ec6149;
    :hover {
      background: rgba(204, 102, 17, 0.1);
    }
  }
  &.writting {
    color: #fff;
    background: #ec6149;
    :hover {
      background: rgba(236, 97, 73, 0.8);
    }
  }
`
const SearchInfo = styled.div `
  margin-top: 4px;
  width: 220px;
  border-radius: 4px;
  position: absolute;
  top: 100%;
  left: 230px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  padding: 20px 20px 10px;
  border-bottom: 1px solid #f0f0f0;
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-bottom-color: #fff;
    left: 20px;
    bottom: 99%;
  }
`

const SearchTitle = styled.div `
  height: 20px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #969696;
`
const SearchInfoSwitch = styled.a `
  cursor:pointer;
  float: right;
  font-size: 13px;
  color: #969696;
  background-color: transparent;
  border-width: 0;
  padding: 0;
  :hover {
    color: #ccc;
  }
  .iconfont {
    display: block;
    float: left;
		font-size: 16px;
		margin-right: 2px;
		transition: all .2s ease-in;
		transform-origin: center center;
  }
`

const SearchInfoList = styled.div `
  overflow: hidden;
`
const SearchInfoItem = styled.a `
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #969696;
  cursor: pointer;
  :hover {
    border: 1px solid #bbb;
  }
`

export {
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
}
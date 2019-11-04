import react, { Component } from 'react';

function shallowEqual(a, b) {
  // 比较两个值是否严格相等，与 === 不同的是， +0和-0返回false，NaN和NaN返回true
  if (Object.is(a, b)) {
    return true;
  }
  if (typeof a !== 'object' || a === null || typeof b !== 'object' || b === null) {
    return false;
  }
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) {
    return false;
  }
  for (let key of keysA) {
    // 判断a有的属性b有没有， 有的话在判断他们相等不相等
    if (!b.hasOwnProperty(key) || !Object.is(a[key], b[key])) {
      return false;
    }
  }
  return true;
}

class PureComponent extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // 不相等返回true，重新渲染， 相等返回false 不重新渲染
    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState)
  }
  render() {
    return this.props.children;
  }
}

// memo 原理
function memo(Func) {
  class Proxy extends React.PureComponent {
    render() {
      return (
        <Func {...this.props} />
      )
    }
  }
  return Proxy;
}
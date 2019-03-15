import React, { Component } from 'react';
import LineHeight from './pages/cssjichu/line-height'
import ReactState from './pages/reactjichu/state'
import JsBind from './pages/jsjichu/js基础bind'
import UseEffect from './pages/reactjichu/useEffect/index'
import UseReducer from './pages/reactjichu/useReducer/index'
import TestEs6 from './pages/jsjichu/es6/index'

class App extends Component {

  render() {
    return <UseReducer />
    // return <UseEffect />
    // return <JsBind />
    return <ReactState />
    return <LineHeight />
  }
}

export default App;

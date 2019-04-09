import React, { Component } from 'react';
import LineHeight from './pages/cssjichu/line-height';
import ReactState from './pages/reactjichu/state';
import UseEffect from './pages/reactjichu/useEffect/index';
import UseReducer from './pages/reactjichu/useReducer/index';
import SetState from './pages/reactjichu/setState/index';
import PageOne from './pages/reactjichu/customHook/pageOne';
import Generator from './pages/Generator/index/index';
// import LeetCode from './pages/LeetCode/index';
import Async from './pages/Generator/async/index';
import Ref from './pages/reactjichu/ref';
import LeetCode from './pages/components/LeetCode/index';
import Hello from './pages/components/LeetCode/hello/index';
import DispatchEvent from './pages/dispatchEvent/index';
import ReactUtil from './pages/reactjichu/reactUtil';


// import JsBind from './pages/jsjichu/js基础bind'
// import reduce from './pages/jsjichu/array/reduce'
// import suanfa from './pages/单元测试/算法题1'
// import qrReduce from './pages/q其他通用理论/react的特点/index'
// import rxjsHelloWorld from './pages/rxjs/helloworld/index'
// import rxjsBook1 from './pages/rxjs/book/index'
// import rxjsexercise from './pages/rxjs/exercise/index';
// import TextReducerContext from './pages/reactjichu/useReduceUseContext';

// import dynamic from './pages/rxjs/exercise/dynamic';
// import response from './pages/rxjs/exercise/response';
// import lodash from './pages/lodash/index';

// import TestEs6 from './pages/jsjichu/es6/index'
// import Tree from './pages/数据结构/树'

class App extends Component {
  render() {
    // return <ReactUtil />;
    return <LeetCode />;
    return <Ref />;
    return <div>124</div>;
    // return <LeetCode />;
      // return <Async />;
      // return <Generator />;
      // return <PageOne />;
      // return <UseReducer />
    // return <SetState />;
    // return <TextReducerContext />;
    // return <Tree />

    // return <UseEffect />
    // return <JsBind />
    return <ReactState />;
    return <LineHeight />;
  }
}

export default App;

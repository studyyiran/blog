import React, {useReducer} from 'react'

function Demo1 () {
    const reducer = (state, action) => {
       console.log(state)
       console.log(action)
        if (action.type === 'add') {
            return {...state, count: state.count + 1}
            // return {count: state.count + 1};
        } else if (action.type === 'minus') {
            return {...state, count: --state.count}
            return state
        } else if (action.type === 'setValue') {
            return {...state, status: action.value}
        }
    }
    const init = {
        count: 0,
        status: 123123
    }
    const [state, dispatch] = useReducer(reducer, init)
    console.log(state)
    return (<div>
        <div>{state && state.count}</div>
        <div>{state && state.status}</div>
            <div onClick={() => {dispatch({type: 'add'})}}>+</div>
            <div onClick={() => {dispatch({type: 'minus'})}}>-</div>
            <div onClick={() => {dispatch({type: 'setValue', value: 100})}}>hehe</div>
        </div>)
}

export default Demo1
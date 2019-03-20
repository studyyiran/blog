import React, {useReducer, useEffect} from 'react'
let dispatch
const reducer = (state, action) => {
    console.log(state)
    console.log(dispatch)
    if (action.type === 'add') {
        return {...state, count: state.count + 1}
        // return {count: state.count + 1};
    } else if (action.type === 'minus') {
        return {...state, count: --state.count}
    } else if (action.type === 'setValue') {
        return {...state, status: action.value}
    } else if (action.type === 'test') {
        return {...state, count: 10001}
    }
}

function Demo1 () {

    const init = {
        count: 4444,
        status: 4444
    }
    // useEffect(function () {
    //     dispatch({type: 'add'})
    // }, [])
    const arr = useReducer(reducer, init)
    let state = arr[0]
    dispatch = arr[1]
    useEffect(() => {
        console.log('get it ')
        console.log(state)
    }, [state])
    return (<div>
        <div>{state && state.count}</div>
        <div>{state && state.status}</div>
            <div onClick={() => {dispatch({type: 'test'})}}>mytest</div>
            <div onClick={() => {dispatch({type: 'add'})}}>+</div>
            <div onClick={() => {dispatch({type: 'minus'})}}>-</div>
            <div onClick={() => {dispatch({type: 'setValue', value: 100})}}>hehe</div>
        </div>)
}

export default Demo1
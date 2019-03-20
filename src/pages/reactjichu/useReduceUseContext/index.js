import React, {useEffect, useContext} from 'react'
import {DispatchContext, ContextProvider, StateContext} from './context'

export default function () {
    return <ContextProvider>
        <Index></Index>
    </ContextProvider>
}

class Index extends React.Component {
    static contextType = StateContext;
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    render () {
        console.log('render Index')
        console.log(this.context)
        return <div>{this.context.count}</div>
    }
}

// function Index () {
//     let a = useContext(StateContext)
//     console.log('reder a')
//     console.log(a)
//     return <div>{a && a.count}</div>
// }



// function Index () {
//     let dispatch = useContext(DispatchContext)
//     let state = useContext(StateContext)
//     useEffect(() => {
//         dispatch({type: 'add', value: '0 to 1'})
//     }, [])
//     return <div>
//         {state && state.count}
//     </div>
// }
import React, {useEffect, useReducer} from 'react'
//
// const StateContext = React.createContext({})
// const StateDispatch = React.createContext({})
// export function StateContextProvider(children) {
//     return <StateContext.Provider value={}>
//         <StateDispatch.Provider value={}>
//             {children}
//         </StateDispatch.Provider>
//     </StateContext.Provider>
// }



function stateReducer (state, action) {
    let {type, value} = action
    let {count} = state
    switch (type) {
        case 'add':
            return { ...state, count: count + 1}
        case 'minus':
            return { ...state, count: count - 1}
    }
}

export default function useCustomHook (templete) {
    const initState = {
        count: 10
    }
    const [state, dispatch] = useReducer(stateReducer, initState)
    return templete(state, dispatch)
}
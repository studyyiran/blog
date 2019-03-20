import React, { useReducer, useEffect } from "react";
export const DispatchContext = React.createContext(null);
export const StateContext = React.createContext(null);

export function ContextProvider({ children }) {
    function reducer(state, action) {
        let { type, value } = action;
        let { count } = state;
        console.log(type);
        return { ...state, count: count + 1 };
    }
    // Note: `dispatch` won't change between re-renders
    const [state, dispatch] = useReducer(reducer, {
        count: 0
    });
    useEffect(() => {
        dispatch({type: 'add'})
    }, [])
    console.log("render one time");
    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    );
}

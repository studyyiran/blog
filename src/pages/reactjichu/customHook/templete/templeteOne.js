import Add from '../components/add'
import Minus from '../components/minus'
import React from 'react'
export default function (state, dispatch) {
    return <div>
        <Add {...state} dispatch={dispatch} />+++
        <Minus {...state} dispatch={dispatch} />---
    </div>
}
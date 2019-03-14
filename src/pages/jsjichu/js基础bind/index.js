import React from 'react'
import {useState} from 'react'
function A () {
    let obj = {
        haha: 'haha'
    }
    // window.setTimeout(function () {
    //     console.log(this)
    // }, 0)
    // console.log(this)
    // window.setTimeout(() => {
    //     console.log('2')
    //     console.log(this)
    // },0)
    let [count, setCount] = useState(0)
    function hehe () {
        console.log(this)
        setCount((count) => count + 1)
    }
    return <div onClick={hehe}>{count}</div>
}

function B () {

}

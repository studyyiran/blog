import React from "react";

function Add ({count, dispatch}) {
    console.log('enter')
    console.log(count)
    console.log(dispatch)
    function inner () {
        if (count > 0) {
            return <div>{count}大于0</div>
        } else if (count < 0) {
            return <div>{count}小于0</div>
        }
    }
    return <div onClick={() => dispatch({type: 'add'})
    }>{inner()}</div>
}

export default Add
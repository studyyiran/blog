import React from "react";

function Minus ({count, dispatch}) {
    function inner () {
        if (count > 0) {
            return <div>{count}大于0</div>
        } else if (count < 0) {
            return <div>{count}小于0</div>
        }
    }
    return <div onClick={() => dispatch({type: 'minus'})
    }>{inner()}</div>
}

export default Minus
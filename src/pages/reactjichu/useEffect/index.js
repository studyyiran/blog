import React, { useState, useEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0);

    useEffect(a);

    function a () {
        if (window.cacheA) {
            // 每一次都会传入新的函数
            console.log(Object.is(window.cacheA, a))
        }
        window.cacheA = a
        console.log('run effect')
        document.querySelector("#body").innerHTML = `You clicked ${count} times`
    }
    return (

        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default Example
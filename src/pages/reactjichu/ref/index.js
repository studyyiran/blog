import React, {useRef, createRef, useEffect, useState} from 'react';

export default function () {
  const [count, setCount] = useState(0);
  useEffect(() => {
    window.setInterval(() => {
      setCount((count) => count + 1);
    }, 10000);
  }, []);
  const inputEl = useRef(null);
  return <div ref={(r) => {
    if (r) {
      console.log(r)
      r.addEventListener('mousemove', () => {
        console.log('mousemove');
      });
      r.addEventListener('mousedown', () => {
        console.log('mousedown');
      });
      r.addEventListener('click', () => {
        console.log('hello');
      });
    }
  }
  }>{count}</div>;
}
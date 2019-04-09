import React from 'react';
function A ({children}) {
  return React.Children.map(children, (child) => {
    console.log(child.props)
    return <div>
      {React.cloneElement(<B />, {hehe: '123'})}
      {React.cloneElement(child, {hehe: '123'})}
    </div>
    return React.cloneElement(<B />, {hehe: '123'}, child);
    // return React.cloneElement(children, {hehe: '123'});
    return React.cloneElement(child, {hehe: '123'});
  })

}

function B({children}) {
  return <div>im b{children}</div>
}

function C ({children}) {
  return children.map((child) => {
    return <div className="container">{child}</div>
  })
}


export default function () {
  return <C miao={"miao"}>
    <>
      <div miaowu="miaowu1">a children</div>
      <div miaowu="miaowu1">a children</div></>

  </C>;
}
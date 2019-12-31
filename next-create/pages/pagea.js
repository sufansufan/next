import React, { useState } from "react";
const pagea = () => {
  const [color, setcolor] = useState('blue');
  const changeColor = () => {
    setcolor(color=='blue' ? 'red' : 'blue')
  }
  return (
    <>
      <div>
        这个是A页面
      </div>
      <div>
        <button onClick={changeColor}>
          改变颜色
        </button>
      </div>
      <style jsx>
        {`
          div {
            color: ${color};
          }
        `}
      </style>
    </>
  )
}

export default pagea

import React, { useState } from 'react';
// 异步加载组件
import dynamic from "next/dynamic";
const One = dynamic(import('../components/one'))

const Time = () => {
  const [nowTime, setNowTime] = useState(Date.now())
  const changeTime = async () => {
    const moment = await import('moment');
    setNowTime(moment.default(Date.now()).format())
  }
  return (
    <>
      <div>
        显示时间为： {nowTime}
      </div>
      <One/>
      <div>
        <button onClick={changeTime}>
          改变时间格式
        </button>
      </div>
    </>
  )
}

export default Time

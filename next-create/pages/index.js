import react from 'react'
import Link from 'next/link'
import Router from "next/router";

const Home = () => {
  // routeChangeStart
  // routeChangeComplete
  // beforeHistoryChange
  // routeChangeError
  // hashChangeStart
  // hashChangeComplete
  Router.events.on('routeChangeStart', (...args) => {
    console.log('1.routeChangeStart->路由开始变化，参数为-----', ...args)
  })
  Router.events.on('routeChangeComplete', (...args) => {
    console.log('2.routeChangeComplete->路由变化结束，参数为-----', ...args)
  })
  Router.events.on('beforeHistoryChange', (...args) => {
    console.log('3.routeHistoryChange->路由变化结束，参数为-----', ...args)
  })
  Router.events.on('routeChangeError', (...args) => {
    console.log('4.routeChangeError->路由发生错误，参数为-----', ...args)
  })
  Router.events.on('hashChangeStart', (...args) => {
    console.log('4.hashChangeStart->路由hash开始发生变化，参数为-----', ...args)
  })
  Router.events.on('hashChangeComplete', (...args) => {
    console.log('4.hashChangeStart->路由hash变化结束，参数为-----', ...args)
  })
  const gotoxiaojiejie = () => {
    Router.push({
      pathname: '/xiaojiejie',
      query: {
        name: '井控'
      }
    })
  }
  return (
    <>
      <div>
        我是首页
      </div>
      <div>
        <Link href={{pathname: '/xiaojiejie', query: {name: '结衣'}}}><a>选择结衣</a></Link><br/>
        <Link href='/xiaojiejie?name=井控'><a>选择井控</a></Link>
      </div>
      <div>
        <button onClick={gotoxiaojiejie}>选井空</button>
      </div>
    </>
  )
}

export default Home

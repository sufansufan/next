# next
## next框架搭建
node版本低的话手动安装npx
~~~
npm install -g npx
~~~

- 手动安装next
~~~
npm init -y
yarn add react react-dom next --Save
~~~
配置scripts
~~~
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
},
~~~

- 使用create-next-app进行搭建
~~~
npm install -g create-next-app
npx create-next-app create-next
~~~

## next路由
### 标签是路由
~~~
import Link from 'next/link'
<div>
  <Link href={{pathname: '/xiaojiejie', query: {name: '结衣'}}}><a>选择结衣</a></Link><br/>
  <Link href='/xiaojiejie?name=井控'><a>选择井控</a></Link>
</div>
~~~

### 编程式路由
~~~
import Router from "next/router";
const gotoxiaojiejie = () => {
    Router.push({
      pathname: '/xiaojiejie',
      query: {
        name: '井控'
      }
    })
  }
<div>
  <button onClick={gotoxiaojiejie}>选井空</button>
</div>
~~~

### 路由传参
使用withRouter才可以使用router，官方给出来的意思就是高阶函数， 同时传参的支持query进行传参，需要是用？
~~~
import { withRouter } from "next/router";
import Link from "next/link";

const xiaojiejie = ({router}) => {
  return (
    <>
      <div>
        {router.query.name}来为你服务
      </div>
      <div>
        <Link href='/'><a>返后首页</a></Link>
      </div>
    </>
  )
}
export default withRouter(xiaojiejie)
~~~

### 路由的钩子事件

routeChangeStart
routeChangeComplete
beforeHistoryChange
routeChangeError
hashChangeStart
hashChangeComplete
~~~
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
  console.log('5.hashChangeStart->路由hash开始发生变化，参数为-----', ...args)
})
Router.events.on('hashChangeComplete', (...args) => {
  console.log('6.hashChangeStart->路由hash变化结束，参数为-----', ...args)
})
~~~

### lazyLoading 懒加载
**外部库的异步加载**
~~~
const changeTime = async () => {
  const moment = await import('moment');
  setNowTime(moment.default(Date.now()).format())
}
~~~

**懒加载组件**
one.js
~~~
export default () => <div>lazy Loading component</div>
~~~
使用
~~~
const One = dynamic(import('../components/one'))
<One/>
~~~

### 自定义head更加友好的seo

**每个页面定义**
~~~
import Head from "next/head";
<>
  <Head>
    <title>sufan</title>
    <meta charSet='utf-8'></meta>
  </Head>
  <div>
    dasdjkasjdlkasjdkl
  </div>
</>
~~~

**全局定义**
自定义heade组件
~~~
import MyHeader from '../components/myheader';
const Header = () => {
  return (
    <>
      <MyHeader></MyHeader>
      <div>
        dasdjkasjdlkasjdkl
      </div>
    </>

  )
}

export default Header
~~~

### 使用antDesignUi组件库
**解决不能引入css问题**
next.config.js
~~~
yarn add @zeit/next-css
const withCss = require("@zeit/next-css")
if(typeof require !== 'undefined'){
  require.extensions['.css']=file=>{}
}

module.exports = withCss({})
~~~
**antd按需引入**
~~~
yarn add antd
yarn add babel-plugin-import
~~~
.babelrc
~~~
{
  "presets": ["next/babel"], // next.js的总配置文件，相当于继承了它本身的所有配置
  "plugins": [ // 增加新的插件，这个插件就是让antd可以按需引入，包括CSS
    [
      "import",
      {
        "libraryName": "antd",
        "style": "css"
      }
    ]
  ]
}
~~~

### next打包问题
主要是引入了antd的css造成的打包失败
解决的方法去掉babelrc中的css的按需加载，引入全局的配置文件_app.js
~~~
import App from 'next/app';
import 'antd/dist/antd.css'
export default App
~~~

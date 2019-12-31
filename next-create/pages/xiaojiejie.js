import { withRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

// getInitialProps  数据请求 中去使用axios

const xiaojiejie = ({router}) => {
  return (
    <>
      <div>
        {router.query.name}来为你服务
      </div>
      <div>
        <Link href='/'><a>返后首页</a></Link>
      </div>
      {/* <div>
        {list}
      </div> */}
    </>
  )
}
xiaojiejie.getInitialProps = async () => {
  const promise  = new Promise((resolve, reject) => {
    axios('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res) => {
      console.log(res)
      resolve(res.data.data)
    })
  })
  return await promise
}
export default withRouter(xiaojiejie)

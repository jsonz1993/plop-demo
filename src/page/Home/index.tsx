/*
 * @Author: Jsonz
 * @Date: 2021-12-24 14:51:19
 * @Email: jsonz@qq.com
 * @LastEditors: Jsonz
 * @LastEditTime: 2021-12-24 16:47:38
 * @Description: file content
 */

import { useInit } from './hooks';


const Home = (props) => {
  const [state, setState] = useInit();
  return (
    <div className="page-home">Page Home {props.demo} </div>
  )
}

export default Home;

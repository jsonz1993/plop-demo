/*
 * @Author: Jsonz
 * @Date: 2021-12-24 15:45:48
 * @Email: jsonz@qq.com
 * @LastEditors: Jsonz
 * @LastEditTime: 2021-12-25 18:05:08
 * @Description: file content
 */
import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom';

const Home = lazy(() => import('../page/Home/index'));
// @@@@@代码自动生成注释1 请勿删除@@@@@

const ROUTES: RouteObject[] = [
  {
    path: '/',
    element: <div>Hello</div>,
  },
	{
    path: '/home',
    element: <Home />,
  },
	// @@@@@代码自动生成注释2 请勿删除@@@@@
]

export default ROUTES;
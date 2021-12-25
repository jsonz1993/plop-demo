/*
 * @Author: Jsonz
 * @Date: 2021-12-24 14:51:19
 * @Email: jsonz@qq.com
 * @LastEditors: Jsonz
 * @LastEditTime: 2021-12-24 16:12:21
 * @Description: file content
 */

import { useInit } from './hooks';

export default function {{properCase name}}() {
  const [state, setState] = useInit();
  return (
    <div className="page-{{dashCase name}}">Page {{name}} </div>
  )
}
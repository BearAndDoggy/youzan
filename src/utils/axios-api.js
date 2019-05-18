import axios from "axios"
import { Message } from 'element-ui';

axios.defaults.baseURL = "http://rap2api.taobao.org/app/mock/7058/"

export default function request(url, method = "get", data={}) {
  return new Promise((resolve,reject) => {
    let axiosObject
    if (method === "get") {
      axiosObject = {
        url,
        method,
        params: data
      }
    } else {
      axiosObject = {
        url,
        method,
        data
      }
    }
    axios(axiosObject)
    .then((res)=>{
      resolve(res)
    })
    .catch((error)=>{
      Message.error('网络通信错误')
      reject(error)
    })
  })

}
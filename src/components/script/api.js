import axios from './axios'

export default {
  //登陆
  login(data) {
    let url = `/api/system/login?account=${data.name}&password=${data.password}`
    return axios({
      method: 'post',
      url
    })
  },
  logOut() {
    let url = `/api/system/logout`
    return axios({
      method: 'get',
      url
    })
  },
  //用户信息
  getUserList(keyWord, pageInfo) {
    let url = `/api/member/getMembers?keyWord=${keyWord}&pageNo=${pageInfo.currentPage}&pageSize=${pageInfo.pageSize}`
    return axios({
      method: 'get',
      url
    })
  }
}


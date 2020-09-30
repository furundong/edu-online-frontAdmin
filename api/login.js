import request from '@/utils/request'

export default {
  //登录
  submitLogin(userInfo) {
    return request({
      url: `/ucenter/login`,
      method: 'post',
      data: userInfo
    })
  },
  //根据token获取用户信息
  getLoginInfo() {
    return request({
      url: `/ucenter/auth/getLoginInfo`,
      method: 'get',
      // headers: {'token': cookie.get('guli_token')}
    })
    //headers: {'token': cookie.get('guli_token')}
  }
}

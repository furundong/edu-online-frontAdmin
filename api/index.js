import request from '@/utils/request'
export default {
  /**
   * 查询前8条热门课程，查询前4条名师
   */
  getList() {
    return request({
      url: `/edu/service/index`,
      method: 'get'
    })
  }
}


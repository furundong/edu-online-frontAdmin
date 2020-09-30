import request from '@/utils/request'

export default {
  getList() {
    return request({
      url: `/cms/banner/getAllBanner`,
      method: 'get'
    })
  }
}

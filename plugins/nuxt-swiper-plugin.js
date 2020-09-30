import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueQriously from 'vue-qriously'
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css

Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI) //使用elementUI
Vue.use(VueQriously)

Vue.prototype.msg = function(response){
  if (response.success) {
    this.$message.success(response.message);
  }else{
    this.$message.error(response.message);
  }
}

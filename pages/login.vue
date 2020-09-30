<template>
  <div class="main">
    <div class="title">
      <nuxt-link class="active" to="/login">登录</nuxt-link>
      <span>·</span>
      <nuxt-link to="/register">注册</nuxt-link>
    </div>

    <client-only>
      <div class="sign-up-container">
        <el-form ref="userForm" :model="user">

          <el-form-item class="input-prepend restyle" prop="mobile"
                        :rules="[{ required: true, message: '请输入手机号码', trigger: 'blur' },{validator: checkPhone, trigger: 'blur'}]">
            <div>
              <el-input type="text" placeholder="手机号" v-model="user.mobile"/>
              <i class="iconfont icon-phone"></i>
            </div>
          </el-form-item>

          <el-form-item class="input-prepend" prop="password"
                        :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
            <div>
              <el-input type="password" placeholder="密码" v-model="user.password"/>
              <i class="iconfont icon-password"></i>
            </div>
          </el-form-item>

          <div class="btn">
            <input type="button" class="sign-in-button" value="登录" @click="submitLogin()">
          </div>
        </el-form>

      </div>
    </client-only>
  </div>
</template>

<script>
  import '~/assets/css/sign.css'
  import '~/assets/css/iconfont.css'
  import cookie from 'js-cookie'

  import loginApi from '@/api/login'

  export default {
    layout: 'sign',
    data() {
      return {
        user: {
          mobile: '',
          password: ''
        },
        loginInfo: {}
      }
    },

    methods: {
      submitLogin() {
        loginApi.submitLogin(this.user).then(response => {
          if (response.success) {

            //把token存在cookie中、也可以放在localStorage中
            cookie.set('guli_token', response.data, {domain: 'localhost'})
            //登录成功根据token获取用户信息
            loginApi.getLoginInfo().then(response => {

              this.loginInfo = response.data
              //将用户信息记录cookie
              cookie.set('guli_ucenter', this.loginInfo, {domain: 'localhost'})
              //跳转页面
              window.location.href = "/"
            })
          }else{
            this.$message.warning(response.message);
          }
        })
      },

      checkPhone(rule, value, callback) {
        //debugger
        if (!(/^1[34578]\d{9}$/.test(value))) {
          return callback(new Error('手机号码格式不正确'))
        }
        return callback()
      }
    }
  }
</script>
<style>
  .el-form-item__error {
    z-index: 9999999;
  }
</style>

<template>
  <div class="sign">
    <!--标题-->
    <div class="logo">
      <nuxt-link class="active" to="/">
        <img src="~/assets/img/logo.png" alt="logo">
      </nuxt-link>
    </div>
    <!--表单-->
    <nuxt/>
    <!-- 更多登录方式 -->
    <div class="more-sign">
      <h6>社交帐号登录</h6>
      <ul>
        <li>
          <a id="weixin" class="weixin" href="http://localhost:8150/api/ucenter/wx/login">
            <i class="iconfont icon-weixin"></i>
          </a>
        </li>
        <li>
          <!--<a id="qq" class="qq" target="_blank" href="#">-->
          <a id="qq" class="qq" href="#">
            <i class="iconfont icon-qq"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "sign",
    components: {},
    props: [],
    data() {
      return {}
    },
    created() {
    },
    methods: {}
  }
</script>

<style scoped>

</style>

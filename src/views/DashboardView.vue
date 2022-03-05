<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <h1>你現在在後台頁面</h1>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">回到前台</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products"
              >產品列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/coupon"
              >優惠券</router-link>
          </li>
          <li class="nav-item">
            <a href="#" @click.prevent="signout" class="nav-link">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view v-if='checkSuccess'></router-view>
</template>

<script>
export default {
  name:'DashboardView',
  data() {
    return {
      checkSuccess: false,
    };
  },
  mounted() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      if(token) {
        this.$http.defaults.headers.common.Authorization = `${token}`;

        const api = `${process.env.VUE_APP_API}api/user/check`;
        this.$http.post(api, { api_token: this.token })
          .then(()=>{
            this.checkSuccess = true;
          })
          .catch(err =>{
            alert(err.data.message);
            this.$router.push('/login');
          });
      }else{
        alert('您尚未登入');
        this.$router.push('/login');
      };
      },
      signout(){
        document.cokie = 'hexToken=;expires=;';
        alert('token 已清除');
        this.$router.push('/login');
      },
    },
  };
</script>
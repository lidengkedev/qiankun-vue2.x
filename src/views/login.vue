<template>
  <div class="container">
    <form class="login" @submit.prevent>
      <div class="form-item">
        <input v-model="username" type="text">
      </div>
      <div class="form-item">
        <input v-model="password" type="password">
      </div>
      <div class="form-item">
        <button @click="login">登录</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        username: 'admin',
        password: 123456,
        redirect: undefined,
        otherQuery: {}
      }
    },
    watch: {
      $route: {
        handler: function(route) {
          const query = route.query
          if (query) {
            this.redirect = query.redirect
            this.otherQuery = this.getOtherQuery(query)
          }
        },
        immediate: true
      }
    },
    methods: {
      login() {
        this.$store.dispatch('user/login', {
          username: this.username,
          password: this.password
        }).then(() => {
          this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
        })
      },
      getOtherQuery(query) {
        return Object.keys(query).reduce((acc, cur) => {
          if (cur !== 'redirect') {
            acc[cur] = query[cur]
          }
          return acc
        }, {})
      }
    }
  }
</script>

<style lang="scss" scoped>
.container {
  margin: 0;
  padding-top: 100px;
  width: 100%;
  height: 100vh;
  min-height: 30%;
  overflow: hidden;
  box-sizing: border-box;
  text-align: center;
  background-color: #36bc98;
  h1 {
    margin: 0;
    color: #fff;
  }
  .login {
    margin-top: 20px;
    .form-item {
      margin-bottom: 20px;
      input {
        width: 200px;
        height: 32px;
        line-height: 32px;
        padding: 0 7px;
        border: 1px solid #eaeaea;
        border-radius: 3px;
        background-color: #f8f8f8;
        box-sizing: border-box;
      }
      button {
        width: 200px;
        height: 32px;
        line-height: 32px;
        border: 1px solid #eaeaea;
        border-radius: 3px;
        color: #fff;
        font-size: 18px;
        padding: 0 7px;
        font-weight: bold;
        background-color: #36bc98;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
          border-color: #52ccba;
        }
      }
    }
  }
}
</style>

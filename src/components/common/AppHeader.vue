<template>
  <header class="navabr ns-navbar">
    <div class="container">
      <div class="navbar-header">
        <a href="/" class="navbar-brand">
          <img src="../../assets/logo.png">
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header-view',
  data () {
    return {
    }
  },
  head: {
    title: {
      inner: '뉴스테이지',
      complement: 'newstage'
    },
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0'
      },
      {
        charset: 'utf-8'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
      }
    ]
  }
}
</script>

<style scoped>
header {
  background-color: #fff;
  margin-bottom: 40px;
}
.navabr .navbar-brand {
  height: 67px;
  padding: 0;
}
.ns-navbar .container {
  padding: 0 29px;
}
.navbar-brand img{
  width: 160px;
}
.ns-navbar {
  border-bottom: 1px solid #ccc;
  box-shadow: 0 1px 0 0 rgba(0,0,0,.03);
  border-top: 3px solid #bbd72e;
}
</style>

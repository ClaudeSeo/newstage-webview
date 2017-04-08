<template>
  <div class="card-container col-xs-12 col-sm-4"  @click="redirectTo(topic.site_url)">
      <div class="card">
        <div class="card-header">
          <img :src="topic.propic" class="img-circle">
          <span>{{ topic.username }}</span>
        </div>
        <div class="card-image">
          <img :src="topic.image" class="img-responsive">
        </div>
        <div class="card-contenets">
          <p class="content-title">{{ topic.title }}</p>
          <p class="content-description">{{ topic.description }}</p>
        </div>
        </div>
  </div>
</template>
<script>
export default {
  name: 'topic',
  props: [ 'topic' ],
  methods: {
    redirectTo: function (url) {
      location.href = url
    }
  }
}
</script>
<style scoped>
.container .card-container {
  text-align: left;
  display: inline-block;
  padding: 0 7px;
  margin-bottom: 14px;
  cursor: pointer;
}
.container .card-container .card {
  box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.02);
  background-color: #fff;
  border-radius: 3px;
  border-top: 1px solid #e3e3e3;
  border-left: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;
  border-bottom: 1px solid #d9d9d9;
  height: 400px;
}
.container .card-container .card div {
  padding: 0 14px;
}
.container .card-container div.card-header {
  display: inline-block;
  line-height: 40px;
  padding-top: 7px;
  padding-bottom: 7px;
}
.container .card-container .card-header img {
  vertical-align: middle;
  margin-right: 6px;
  width: 30px;
  height: 30px;
}
.container .card-container .card-image {
  padding: 0;
  border-bottom: solid 1px rgba(0,0,0,0.03);
  border-top: solid 1px rgba(0,0,0,0.03);
  margin-bottom: 10px;
}
.container .card-container .card-image img {
  background-position: center;
  background-size: cover;
  max-width: 100%;
  max-height: 180px;
  margin: 0 auto;
}
.container .card-container .card-contenets {
  height: 158px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}
.container .card-container .card-contenets .content-title {
  font-weight: bold;
  font-size: 17px;
  line-height: 150%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}
.container .card-container .card-contenets .content-description {
  white-space: pre-line;
  line-height: 22px;
  overflow: hidden;
}
</style>

<template>
  <div class="main">
    <AppHeader></AppHeader>
    <div class="container">
      <Topic v-for="topic in topics" :topic="topic" :key="topic.id"></Topic>
      <Pagination></Pagination>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader'
import Topic from '@/components/Topic'
import Pagination from '@/components/Pagination'
import Validator from '@/mixin/validator'

export default {
  name: 'main',
  data () {
    return {
      topics: []
    }
  },
  mixins: [
    Validator
  ],
  components: {
    AppHeader,
    Topic,
    Pagination
  },
  mounted: function () {
    this.fetchTopics()
    this.$nsbus.$on('Pagination.clicked', (page) => {
      this.fetchTopics(page)
    })
  },
  beforeDestroy () {
    this.$nsbus.$off('Pagination.create')
    this.$nsbus.$off('Pagination.clicked')
  },
  methods: {
    fetchTopics (page = 1) {
      this.$nsapi.getTopics(page, (success) => {
        const topics = success.data.data.map((topic) => {
          topic.image = this.validateURL(topic.image) ? topic.image : require('../assets/thumbnail.png')
          topic.propic = this.validateURL(topic.propic) ? topic.propic : require('../assets/usericon.png')
          return topic
        })
        this.topics = topics
        const metadata = success.data.metadata
        this.$nsbus.$emit('Pagination.create', metadata.cur_page, metadata.first_page, metadata.last_page)
      }, (error) => {
        alert('서버와 통신중 에러가 발생했습니다.')
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
</style>

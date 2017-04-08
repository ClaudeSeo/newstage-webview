<template>
  <div class="error-page">
    <AppHeader></AppHeader>
    <img src="../assets/404.png" class="img-responsive center-block">
  </div>
</template>
<script>
import AppHeader from '@/components/common/AppHeader'

export default {
  name: 'error-page',
  components: {
    AppHeader
  }
}
</script>
<style scoped>
</style>

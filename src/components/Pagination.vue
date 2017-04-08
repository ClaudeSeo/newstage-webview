<template>
  <div class="col-xs-12 text-center">
    <div class="pagination-wrapper">
      <a href="" v-if="pagination.prevExists" @click.prevent="onClickListener(pagination.pages[0] - 1)">
        <i class="glyphicon glyphicon-menu-left"></i>
      </a>
      <span class="element">·</span>
      <span v-for="page in pagination.pages" :class="{ current: page == currPage }" @click.prevent="onClickListener(page)" class="page">{{ page }}</span>
      <span class="element">·</span>
      <a href="" v-if="pagination.nextExists" @click.prevent="onClickListener(pagination.pages.slice(-1)[0] + 1)">
        <i class="glyphicon glyphicon-menu-right"></i>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'pagination',
  data () {
    return {
      pagination: {},
      firstPage: 1,
      lastPage: 1,
      currPage: 1,
      maxNumberToDisplay: 5
    }
  },
  created () {
    this.$nsbus.$on('Pagination.create', (currPage, firstPage, lastPage, maxNumberToDisplay = 5) => {
      this.currPage = currPage
      this.firstPage = firstPage
      this.lastPage = lastPage
      this.maxNumberToDisplay = maxNumberToDisplay
      this.pagination = this.makePagination()
      this.$nsbus.$emit('Pagination.created')
    })
  },
  beforeDestroy () {
    this.$nsbus.$off('Pagination.create')
  },
  methods: {
    makePagination () {
      var prevExists = true
      var nextExists = true
      var head = this.currPage - parseInt(this.maxNumberToDisplay / 2)
      var tail = this.currPage + parseInt(this.maxNumberToDisplay / 2)
      if (this.maxNumberToDisplay % 2 === 1) {
        head += 1
      }
      var pages = this.range(head, tail + 1)
      var pageRange = this.range(this.firstPage, this.lastPage + 1)
      if (head <= this.firstPage) {
        prevExists = false
        pages = pageRange.slice(0, this.maxNumberToDisplay)
        nextExists = pages[pages.length - 1] < this.lastPage
      }
      if (tail >= this.lastPage) {
        nextExists = false
        var pageRangeLength = pageRange.length
        var startIdx = pageRangeLength - this.maxNumberToDisplay
        pages = pageRange.slice(startIdx, pageRangeLength - 1)
        prevExists = pages[0] > this.firstPage
      }
      return {
        pages: pages,
        curr: this.currPage,
        prevExists: prevExists,
        nextExists: nextExists
      }
    },
    range (start, end) {
      var entities = []
      for (var i = start; i <= end; i++) {
        entities.push(i)
      }
      return entities
    },
    onClickListener (page) {
      this.$nsbus.$emit('Pagination.clicked', page)
    }
  }
}
</script>
<style scoped>
.pagination-wrapper {
  font-size: 25px;
  margin-top: 35px;
  margin-bottom: 35px;
}
.pagination-wrapper a {
  vertical-align: middle;
  color: #adb5bd;
}
.pagination-wrapper span {
  padding: 5px 5px;
}
.pagination-wrapper span.current {
  color: #f00;
}
.pagination-wrapper .page {
  cursor: pointer;
}
</style>

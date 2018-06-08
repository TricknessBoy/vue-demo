<template>
  <div class="page">
    <h2>{{title}}</h2>
    <div v-html='content'></div>
    <p>这是页面{{title}}</p>
  </div>
</template>

<script>
export default {
  name: 'Page',
  data () {
    return {
      title: '',
      content: ''
    }
  },
  created () {
    this.title = this.$route.params.title
    this.content = this.$route.params.content
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div class="header">
    <div class="header-warpper">
      <button @click="$router.back(-1)">返回</button>
      <p>{{message}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-header',
  data () {
    return {
      message: '这是头部'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header,
  .header-warpper{
    height: 50px;
    background: #67c23a;
  }
  .header-warpper{
    position: relative;
    display: flex;
    display: -webkit-flex;
  }
  .header button{
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
  }
  .header p{
    width: 100%;
    align-items: center;
    justify-content: center;
    color: red;
  }
</style>

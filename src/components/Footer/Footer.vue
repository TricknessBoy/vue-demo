<template>
  <div class="footer">
    <div class="footer-warpper">
      <p>{{message}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-footer',
  data () {
    return {
      message: '这是底部'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer,
  .footer-warpper{
    height: 50px;
    background: #445588;
  }
  .footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .footer-warpper{
    display: table;
    width: 100%;
  }
  .footer p{
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    color: #ffffff;
  }
</style>

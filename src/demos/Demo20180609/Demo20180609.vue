<template>
  <keep-alive>
    <div class="switch-box">
      <SimpleSwitch v-model="val"></SimpleSwitch>
      <div class="btn">{{text}}</div>
    </div>
  </keep-alive>
</template>

<script>
import SimpleSwitch from '@/components/SimpleSwitch/SimpleSwitch'
export default {
  name: 'Demo20180609',
  components: {
    SimpleSwitch
  },
  data () {
    return {
      val: false
    }
  },
  computed: {
    text () {
      return this.val === false ? '关闭' : '开启'
    }
  }
}
</script>

<style scoped>
  .btn {
    display: flex;
    width: 80px;
    height: 30px;
    margin: 20px auto;
    align-items: center;
    justify-content: center;
    background: #4ae0a8;
    border-radius: 5px;
    transform: translateX(0);
  }
</style>

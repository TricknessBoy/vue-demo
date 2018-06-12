<template>
  <div class="tab-box">
    <h3>{{infs.title}}</h3>
    <div class="tab-header" :class="'tab-'+infs.actived"></div>
    <div class="tab-content">
      <p>{{infs.content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabPanel',
  props: {
    infs: {
      type: Object,
      default: function () {
        return {
          tabColor: 'tab-red',
          tabTitle: '',
          tabContent: ''
        }
      }
    }
  },
  data () {
    return {
      tabDatas: {}
    }
  },
  watch: {
    infs () {
      this.tabDatas = this.infs
    }
  },
  created () {
    this.tabDatas = this.infs
  }
/*
computed: {
    tabDatas: function () {
      return this.infs
    }
  }
  */
}
</script>

<style scoped>
  .tab-box .tab-header{
    width: 50%;
    height: 150px;
    margin: 0 auto;
  }
  .tab-red{
    background: red;
  }
  .tab-green{
    background: green;
  }
  .tab-blue{
    background: blue;
  }
</style>

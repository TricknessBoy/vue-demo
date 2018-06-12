<template>
  <div class="tabs-wrapper">
    <div class="tabs">
      <div class="tab" :class="{'active': actived === 'red'}" @click="toggleTab($event,'red')"><a>红色</a></div>
      <div class="tab" :class="{'active': actived === 'green'}" @click="toggleTab($event,'green')"><a>绿色</a></div>
      <div class="tab" :class="{'active': actived === 'blue'}" @click="toggleTab($event,'blue')"><a>蓝色</a></div>
    </div>
    <keep-alive>
      <component :is="currentTab" :infs="tabDatas"></component>
    </keep-alive>
  </div>
</template>

<script>
import TabPanel from '@/components/TabPanel/TabPanel'

const obj = {
  'red': {
    actived: 'red',
    title: '11111',
    content: '这是内容111111'
  },
  'green': {
    actived: 'green',
    title: '22222',
    content: '这是内容222222'
  },
  'blue': {
    actived: 'blue',
    title: '33333',
    content: '这是内容333333'
  }
}

export default {
  name: 'Demo20180610',
  data () {
    return {
      currentTab: TabPanel,
      actived: 'red',
      tabDatas: obj['red']
    }
  },
  components: {
    TabPanel
  },
  methods: {
    toggleTab: function (ev, tabName) {
      this.actived = tabName
      this.tabDatas = obj[tabName]
    }
  }
}
</script>

<style scoped>
  .tabs{
    margin-top: 10px;
  }
  .tabs .tab{
    display: inline-block;
    width: 100px;
    padding: 5px auto;
    border-radius: 2px;
    background: #9a9a9a;
    color: white;
  }
  .tabs .active{
    background: #0033FF;
  }
</style>

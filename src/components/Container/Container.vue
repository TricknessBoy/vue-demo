<template>
    <div class="container">
        <div class="container-warpper">
            <ul class="menu-list">
                <li v-for="item in items" :key="item.id">
                    <!--<router-link :to="'/page/'+item.id" :params="item">标题：{{item.title}}</router-link>-->
                    <router-link :to="{name:'list',params:item}">标题：{{item.title}}</router-link>
                </li>
            </ul>
            <div class="list">
                <router-link :to="{path:'/demo/20180609'}">2018年06月09日-简单开关</router-link>
            </div>
            <div class="list">
                <router-link :to="{path:'/demo/20180610'}">2018年06月10日-简单Tab切换</router-link>
            </div>
            <div class="list">
                <router-link :to="{path:'/demo/20180612'}">2018年06月12日-简单轮播图</router-link>
            </div>
            <div class="list">
                <router-link :to="{path:'/demo/20180718'}">2018年07月18日-MintUI之Toast组件</router-link>
            </div>
            <div class="list">
                <router-link :to="{path:'/demo/20180718/scss'}">2018年07月18日-Scss之Toast组件</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import Vueaxios from 'vue-axios'
Vue.use(Vueaxios, axios)

export default {
  name: 'Container',
  data () {
    return {
      items: []
    }
  },
  created () {
    let localApi = 'static/data.json'
    axios.get(localApi).then((res) => {
      this.items = res.data.items
    }, (err) => {
      console.log(err)
    })
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul{
    list-style: none;
  }
  .btn{
    margin-left: 10px;
  }
  .list{
    width: 100%;
  }
</style>

<template>
  <div class="slide-wrapper">
    <div class="slide-title">简易轮播图</div>
    <div class="slide" v-on:mouseover="stop()" @mouseout="move()">
      <div class="slideshow">
        <transition-group tag="ul" name="slide">
          <li v-for="(img, index) in imgArray" v-show="index===mark" :key="index">
            <a href="javascript:;">
              <img :src="img.src" :alt="img.title">
            </a>
          </li>
        </transition-group>
      </div>
      <div class="bullet">
        <span v-for="(img, index) in imgArray" :class="{'active':index===mark}" @click="change(index)" :key="index"></span>
      </div>
    </div>
  </div>

</template>

<script>
const INTERTIME = 2500
export default {
  name: 'Demo20180612',
  data () {
    return {
      mark: 0,
      imgArray: [
        {title: '图片01', src: '/static/images/slideimg01.jpg'},
        {title: '图片02', src: '/static/images/slideimg02.jpg'},
        {title: '图片03', src: '/static/images/slideimg03.jpg'},
        {title: '图片04', src: '/static/images/slideimg04.jpg'},
        {title: '图片05', src: '/static/images/slideimg05.jpg'},
        {title: '图片06', src: '/static/images/slideimg06.jpg'},
        {title: '图片07', src: '/static/images/slideimg07.jpg'}
      ]
    }
  },
  created () {
    this.play()
  },
  methods: {
    autoPlay () {
      this.mark++
      let len = this.imgArray.length
      if (this.mark >= len) {
        this.mark = 0
      }
    },
    play () {
      this.timer = setInterval(this.autoPlay, INTERTIME)
    },
    change (idx) {
      this.mark = idx
    },
    stop () {
      clearInterval(this.timer)
    },
    move () {
      this.timer = setInterval(this.autoPlay, INTERTIME)
    }
  }
}
</script>

<style scoped>
  .slide-wrapper{
    width: 640px;
    height: 320px;
    margin: 0 auto;
    margin-top: 50px;
  }
  .slide {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .slideshow {
    width: 100%;
    height: 100%;
  }
  ul {
    list-style: none;
    -webkit-padding-start: 0;
  }
  ul li{
    position: absolute;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .bullet {
    position: absolute;
    width: 100%;
    bottom: 0;
    margin: 0 auto;
    text-align: center;
    z-index: 1;
  }
  .bullet span {
    display: inline-block;
    width: 20px;
    height: 5px;
    margin-right: 10px;
    border: 1px solid;
    background: white;
  }
  .active {
    background: red !important;
  }

  .slide-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
  }
  .slide-leave-active {
    transform: translateX(-100%);
    transition: all 1.5s ease;
  }
  .slide-enter {
    transform: translateX(100%);
  }
  .slide-leave {
    transform: translateX(0);
  }
</style>

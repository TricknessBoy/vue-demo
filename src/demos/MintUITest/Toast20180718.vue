<template>
  <div class="btn-box">
    <mt-button class="btn" type="default" size="normal" @click="showToast">点我Toast测试</mt-button>
    <mt-button class="btn" type="primary" size="normal" @click="showSuccess">默认按钮</mt-button>
    <mt-button class="btn" type="danger" size="normal" @click="showWarning">报警按钮</mt-button>
  </div>
</template>

<script>
    import { Button, Toast } from 'mint-ui'
    export default {
        name: "Toast20180718",
        data(){
            return {
                message: "我的名字叫阿满"
            }
        },
        methods : {
            showToast(){
                Toast(this.message);
            },
            showSuccess(){
                Toast({
                    message: this.message,
                    position: 'bottom',
                    duration: 3000
                });
            },
            showWarning(){
                Toast({
                    message: this.message,
                    position: 'top',
                    duration: 5000
                });
            }
        }
    }
</script>

<style scoped>
  .btn-box{
    margin-top: 10px;
  }
  .btn-box .btn{
    margin: 10px 20px;
  }
</style>

<template>
    <span
      class="ui-switch"
      :class="{'ui-switch-on' : slefChecked}"
      :value="value"
      @click="toggle"
    >
    </span>
</template>

<script>
export default {
  name: 'SimpleSwitch',
  props: {
    value: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      slefChecked: this.value
    }
  },
  watch: {
    slefChecked (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    toggle () {
      this.slefChecked = !this.slefChecked
    }
  }
}
</script>

<style scoped>
  .ui-switch{
    display: block;
    position: relative;
    width: 62px;
    height: 32px;
    margin: 10px auto;
    border: 1px solid #DFDFDF;
    outline: 0;
    border-radius: 16px;
    box-sizing: border-box;
    background-color: #DFDFDF;
    transition: background-color 0.1s, border 0.1s;
    cursor: pointer;
  }
  .ui-switch:before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 30px;
    border-radius: 15px;
    background-color: #FDFDFD;
    transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
  }
  .ui-switch:after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #FFFFFF;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
  }
  .ui-switch-on {
    border-color: #1AAD19;
    background-color: #1AAD19;
  }
  .ui-switch-on:before {
    border-color: #1AAD19;
    background-color: #1AAD19;
  }
  .ui-switch-on:after {
    -webkit-transform: translateX(30px);
    transform: translateX(30px);
  }
</style>

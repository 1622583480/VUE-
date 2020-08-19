<template>
  <div v-if="open" id="alert">
    <transition>
      <div class="alert_mark"></div>
    </transition>
    <transition>
      <div class="alert_content">
        <div class="alert-content-header">
          <slot name="title"></slot>
        </div>
        <div class="alert-content-context">
          <slot name="context"></slot>
        </div>
        <div class="alert-control">
          <slot name="sure"></slot>
          <slot name="concel"></slot>
        </div>
      </div>
    </transition>
    <div class="alert_footer"></div>
  </div>
</template>

<script>
export default {
  props: ["open"],
  data() {
    return {};
  },
  methods: {
    hidden() {
        this.open = false
    },
  },
  created() {
  },
};
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  outline: none;
  border: none;
  background-color: none;
  color: #000;
}
.alert {
  width: 100vw;
  height: 100vh;
  position: fixed;
}
.alert_mark {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}
.alert_content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0px 0px 16px -5px #000;
  min-width: 250px;
  padding: 10px 20px;
  border-radius: 8px;
}
.alert-control {
  text-align: end;
}
.alert-control > button {
  padding: 4px 12px;
  font-size: 12px;
  border-radius: 4px;
  margin-left: 10px;
  border: 1px solid #333;
}
.alert-content-header {
  font-weight: 900;
  font-size: 22px;
  padding-bottom: 14px;
}
.alert-content-context {
  margin-left: 10px;
  padding-bottom: 14px;
}
</style>
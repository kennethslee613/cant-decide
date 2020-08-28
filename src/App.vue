<template>
  <div id="app">
    <TheHeader />
    <router-view />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style>
body {
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.btn {
  border: none;
  background: #bc1212;
  color: #fff;
  padding: 12px 22px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
}

.btn:hover {
  background: #910f0f;
}

.btn:focus {
  outline-color: #888;
  outline-style: dashed;
  outline-offset: 2px;
}
</style>

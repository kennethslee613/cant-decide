<template>
  <header>
    <span class="header-items">
      <router-link class="btn header-item" tag="button" to="/">Home</router-link>
      <router-link class="btn header-item" tag="button" to="/about">About</router-link>
    </span>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>

<style scoped>
header {
  background: #bc1212;
  padding: 10px;
  display: flex;
}

.header-item {
  margin: 2px 5px;
  padding: 10px 20px;
}

.header-item:focus {
  background: #910f0f;
  outline: none;
}

.header-items {
  margin-left: auto;
}
</style>

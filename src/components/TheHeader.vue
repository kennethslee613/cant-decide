<template>
  <header>
    <span class="header-items">
      <router-link class="header-item" tag="button" to="/">Home</router-link>
      <router-link class="header-item" tag="button" to="/about">About</router-link>
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

button {
  border: none;
  background: #bc1212;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 3px;
  margin: 2px 5px;
  font-size: 16px;
}

button:hover {
  background: #910f0f;
}

button:focus {
  outline-color: #ccc;
  outline-style: dashed;
}

.header-items {
  margin-left: auto;
}
</style>

<template>
  <div class="home">
    <LocationForm msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import LocationForm from '@/components/LocationForm.vue'

export default {
  name: 'Home',
  components: {
    LocationForm
  }
}
</script>

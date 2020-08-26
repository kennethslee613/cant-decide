<template>
  <div class="home">
    <LocationSelect />
  </div>
</template>

<script>
import LocationSelect from '@/components/LocationSelect.vue'

export default {
  name: 'Home',
  components: {
    LocationSelect
  }
}
</script>

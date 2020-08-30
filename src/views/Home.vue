<template>
  <div class="home">
    <LocationSelect :mobile="mobile" />
  </div>
</template>

<script>
import LocationSelect from '@/components/LocationSelect.vue'

export default {
  name: 'Home',
  components: {
    LocationSelect
  },
  props: {
    randomRestaurant: {
      type: Object,
      default: null
    },
    mobile: {
      type: Boolean
    }
  }
}
</script>

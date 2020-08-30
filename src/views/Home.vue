<template>
  <div class="home">
    <LocationSelect
      :mobile="mobile"
      :random-restaurant="randomRestaurant"
      @set-random-restaurant="setRandomRestaurant"
    />
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
    mobile: {
      type: Boolean
    }
  },
  data() {
    return {
      randomRestaurant: null
    };
  },
  methods: {
    setRandomRestaurant(nearbyRestaurants) {
      this.randomRestaurant = nearbyRestaurants[Math.floor(Math.random() * nearbyRestaurants.length)];
    }
  }
}
</script>

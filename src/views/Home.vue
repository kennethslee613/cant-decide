<template>
  <div :class="{'home': !mobile, 'home-mobile': mobile}">
    <LocationSelect
      v-if="googleLoaded"
      :mobile="mobile"
      :random-restaurant="randomRestaurant"
      @set-random-restaurant="setRandomRestaurant"
    />
    <RandomRestaurantCard
      class="card"
      v-if="googleLoaded && randomRestaurant !== null"
      :random-restaurant="randomRestaurant"
      :mobile="mobile"
    />
  </div>
</template>

<script>
import { Loader } from 'google-maps';
import LocationSelect from '@/components/LocationSelect.vue';
import RandomRestaurantCard from '@/components/RandomRestaurantCard.vue';

export default {
  name: 'Home',
  components: {
    LocationSelect,
    RandomRestaurantCard
  },
  props: {
    mobile: {
      type: Boolean
    }
  },
  data() {
    return {
      randomRestaurant: null,
      googleLoaded: false
    };
  },
  methods: {
    setRandomRestaurant(nearbyRestaurants) {
      if (nearbyRestaurants === null) {
        this.randomRestaurant = null;
      } else {
        this.randomRestaurant = nearbyRestaurants[Math.floor(Math.random() * nearbyRestaurants.length)];
        console.log(this.randomRestaurant)
      }
    }
  },
  async mounted() {
    if (!window.google) {
      const options = {
        libraries: ['places']
      };
      const loader = new Loader(process.env.VUE_APP_GOOGLE_API_KEY, options);
      await loader.load();
      this.googleLoaded = true;
    }
  }
}
</script>

<style scoped>
.home {
  margin: 90px 180px 40px 180px;
}
.home-mobile {
  margin: 50px 30px;
}
</style>

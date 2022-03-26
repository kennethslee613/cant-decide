<template>
  <div :class="{'home': !mobile, 'home-mobile': mobile}">
    <LocationSelect
      v-if="googleLoaded"
      :mobile="mobile"
      :random-restaurant="randomRestaurant"
      @set-random-restaurant="setRandomRestaurant"
    />
    <div v-if="isLoading" class="loading">
      <Loading />
    </div>
    <RandomRestaurantCard
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
import Loading from '@/components/Loading.vue';

export default {
  name: 'Home',
  components: {
    LocationSelect,
    RandomRestaurantCard,
    Loading
  },
  props: {
    mobile: {
      type: Boolean
    }
  },
  data() {
    return {
      randomRestaurant: null,
      googleLoaded: false,
      isLoading: false
    };
  },
  methods: {
    setRandomRestaurant(nearbyRestaurants) {
      if (nearbyRestaurants === null) {
        this.isLoading = true;
        this.randomRestaurant = null;
      } else {
        this.isLoading = false;
        this.randomRestaurant = nearbyRestaurants[Math.floor(Math.random() * nearbyRestaurants.length)];
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
    } else {
      this.googleLoaded = true;
    }
  }
}
</script>

<style scoped>
.home {
  margin: 142px 180px 40px 180px;
}
.home-mobile {
  margin: 112px 30px 30px 30px;
}
.loading {
  margin: 130px auto;
  width: 80px;
}
</style>

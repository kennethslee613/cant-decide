<template>
  <div>
    <form @submit="submitLocation()">
      <input
        ref="autocomplete"
        type="text"
        name="location"
        placeholder="Enter a location"
        options=""
      />
      <input type="submit" class="btn" value="Submit" />
      {{location}}
    </form>
  </div>
</template>

<script>
import { Loader } from 'google-maps';

export default {
  name: 'LocationForm',
  data() {
    return {
      location: '',
      autocomplete: null
    };
  },
  async mounted() {
    if (!window.google) {
      const options = {
        libraries: ['places']
      };
      const loader = new Loader(process.env.VUE_APP_GOOGLE_API_KEY, options);
      await loader.load();
    }

    this.autocomplete = new window.google.maps.places.Autocomplete(
      (this.$refs.autocomplete),
      {types: ['geocode']}
    );

    this.autocomplete.addListener('place_changed', () => {
      let place = this.autocomplete.getPlace();
      this.location = place.formatted_address;
    });
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: row;
  margin: 50px;
}

input[type="text"] {
  /* flex: 7 1 auto; */
  padding: 5px;
  /* border-width: 1px; */
  /* border-top-right-radius : 0px; */
  /* border-bottom-right-radius : 0px; */
}

input[type="submit"] {
  /* flex: 1 2 auto; */
}
</style>

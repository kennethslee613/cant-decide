<template>
  <div>
    <form
      @submit="submitLocation"
      :class="{'form': !mobile, 'form-mobile': mobile}"
    >
      <div :class="{'location-select': !mobile}">
        <div class="section-wrapper-location" :class="{'section-wrapper-mobile': mobile}">
          <div class="section section-head"></div>
          <input
            :class="{
              'no-location-input': noLocationInput,
              'input-location': !mobile,
              'input-location-mobile': mobile
            }"
            ref="autocomplete"
            type="text"
            name="location"
            placeholder="Enter a location"
            v-model.lazy="location"
            @keydown="keyDown"
          />
        </div>
        <div class="section-wrapper-miles" :class="{'section-wrapper-mobile': mobile}">
          <div
            class="section section-text"
            :class="{'within': !mobile, 'within-mobile': mobile}"
          >
            within
          </div>
          <input
            type="number"
            step="any"
            name="miles"
            placeholder="5"
            v-model="miles"
          />
          <div
            class="section section-text"
            :class="{'miles': !mobile, 'miles-mobile': mobile}"
          >
            mile(s)
          </div>
        </div>
        <input type="submit" class="btn" value="Submit" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LocationSelect',
  data() {
    return {
      location: '',
      locationObject: null,
      miles: 1,
      noLocationInput: false,
      nearbyRestaurants: [],
    };
  },
  props: {
    mobile: {
      type: Boolean
    },
    randomRestaurant: {
      type: Object
    },
  },
  methods: {
    async submitLocation(event) {
      event.preventDefault();
      this.$emit('set-random-restaurant', null);

      try {
        if (this.location !== '') {
          this.noLocationInput = false;
          if (this.locationObject === null) {
            this.locationObject = await this.autocompleteOnSubmit();
              this.location = this.locationObject.formatted_address;
          }
        } else {
          this.noLocationInput = true;
          return;
        }

        this.nearbyRestaurants = await this.restaurantSearch();

        this.$emit('set-random-restaurant', this.nearbyRestaurants);
      } catch (error) {
        alert('The Google API is currently unavailable.');
        console.error(error);
      }
    },
    autocompleteOnSubmit() {
      return new Promise((resolve, reject) => {
        try {
          const autocompleteRequest = {
            query: this.location,
            fields: ["formatted_address", "geometry"]
          };

          const service = new window.google.maps.places.PlacesService(this.$refs.autocomplete);
          service.findPlaceFromQuery(autocompleteRequest, (results, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              resolve(results[0]);
            } else {
              throw 'Autocomplete failed.';
            }
          });
        } catch (error) {
          reject(error);
        }
      });
    },
    restaurantSearch() {
      return new Promise((resolve, reject) => {
        try {
          let nearbySearchRequest = {
            location: this.getCoordinates(),
            radius: this.milesToMeters(this.miles),
            type: 'restaurant',
            openNow: true,
          };
          let nearbyRestaurants = [];
          const service = new window.google.maps.places.PlacesService(document.createElement('div'));
          service.nearbySearch(nearbySearchRequest, (results, status, pagination) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              nearbyRestaurants = [...nearbyRestaurants, ...results];
              if (!pagination.hasNextPage) {
                resolve(nearbyRestaurants);
              }
              setTimeout(() => {
                pagination.nextPage();
              }, 2000)
            } else {
              throw 'Nearby search failed.';
            }
          });
        } catch (error) {
          reject(error);
        }
      });
    },
    getCoordinates() {
      return new window.google.maps.LatLng(this.locationObject.geometry.location.lat(), this.locationObject.geometry.location.lng())
    },
    milesToMeters(miles) {
      return miles / 0.000621371;
    },
    keyDown(event) {
      if (event.keyCode !== 13) {
        this.locationObject = null;
      }
    }
  },
  async mounted() {
    const autocomplete = new window.google.maps.places.Autocomplete(
      (this.$refs.autocomplete),
      {types: ['geocode']}
    );

    autocomplete.addListener('place_changed', async () => {
      this.locationObject = await autocomplete.getPlace();
      if (typeof this.locationObject.geometry !== 'undefined') {
        this.location = this.locationObject.formatted_address;
      } else {
        this.locationObject = null;
      }
    });
  }
}
</script>

<style scoped>
.form {
  margin-bottom: 75px;
}
.form-mobile {
  margin-bottom: 30px;
  text-align: center;
}

input {
  margin: 0px;
}

input[type="text"] {
  flex: 11 1 auto;
  padding: 5px 10px;
}
.input-location {
  border: solid #b9b9b9;
  border-width: 1px 0px;
}
.input-location-mobile {
  border: solid #b9b9b9;
  border-width: 1px 1px 1px 0px;
  border-top-right-radius : 4px;
  border-bottom-right-radius : 4px;
}

input[type="number"] {
  flex: 1 1;
  width: 50px;
  border: solid #b9b9b9;
  border-width: 1px 0px;
  padding: 5px 10px;
}

input[type="submit"] {
  flex: 2 1 auto;
  border-radius: 0px 4px 4px 0px;
}

.location-select {
  display: flex;
  flex-direction: row;
}

.section {
  align-items: center;
  text-align: center;
  display: flex;
  height: auto;
}

.section-head {
  color: #fff;
  background: #bc1212;
  border: solid;
  border-width: 0px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  width: 42px;
  background-image: url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjRkZGRkZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZGlzcGxheTpub25lO30KCS5zdDF7ZGlzcGxheTppbmxpbmU7fQoJLnN0MntvcGFjaXR5OjAuMjI7fQoJLnN0M3tvcGFjaXR5OjAuMzM7ZmlsbDojRkZGRkZGO30KCS5zdDR7b3BhY2l0eTowLjE7ZmlsbDojRkZGRkZGO30KCS5zdDV7ZGlzcGxheTpub25lO29wYWNpdHk6MC4zO30KCS5zdDZ7ZGlzcGxheTppbmxpbmU7b3BhY2l0eTowLjIyO30KCS5zdDd7b3BhY2l0eTowLjY0O2ZpbGw6I0ZGRkZGRjt9Cgkuc3Q4e2Rpc3BsYXk6aW5saW5lO29wYWNpdHk6MC4xO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Q5e2Rpc3BsYXk6bm9uZTtvcGFjaXR5OjAuNTU7fQoJLnN0MTB7ZGlzcGxheTppbmxpbmU7b3BhY2l0eTowLjMzO2ZpbGw6I0ZGRkZGRjt9Cgkuc3QxMXtkaXNwbGF5Om5vbmU7b3BhY2l0eTowLjE1O2ZpbGw6I0ZGRkZGRjt9Cgkuc3QxMntmaWxsOiNGRkZGRkY7fQoJLnN0MTN7ZGlzcGxheTppbmxpbmU7b3BhY2l0eTowLjI5O30KCS5zdDE0e2Rpc3BsYXk6aW5saW5lO29wYWNpdHk6MC4yOTtmaWxsOiNGRkZGRkY7fQoJLnN0MTV7ZmlsbDojRkZGRkZGO30KCS5zdDE2e2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjt9Cgkuc3QxN3tkaXNwbGF5Om5vbmU7b3BhY2l0eTowLjUzO2ZpbGw6I0ZGRkZGRjt9Cgkuc3QxOHtkaXNwbGF5OmlubGluZTtvcGFjaXR5OjAuMzE7fQoJLnN0MTl7ZmlsbDojRkZGRkZGO30KCS5zdDIwe2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjt9Cgkuc3QyMXtkaXNwbGF5Om5vbmU7b3BhY2l0eTowLjM1O30KCQoJCS5zdDIye2Rpc3BsYXk6bm9uZTtvcGFjaXR5OjAuNDM7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+PGcgY2xhc3M9InN0MCI+PGcgY2xhc3M9InN0MSI+PGc+PGc+PGc+PGcgY2xhc3M9InN0MiI+PHJlY3QgeD0iMCIgY2xhc3M9InN0MyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48L3JlY3Q+PC9nPjwvZz48Y2lyY2xlIGNsYXNzPSJzdDQiIGN4PSIxMiIgY3k9IjEyIiByPSIxMCI+PC9jaXJjbGU+PHBhdGggY2xhc3M9InN0NCIgZD0iTTIwLDIxSDRjLTAuNSwwLTEtMC41LTEtMVY0YzAtMC41LDAuNS0xLDEtMWgxNmMwLjUsMCwxLDAuNSwxLDF2MTZDMjEsMjAuNSwyMC41LDIxLDIwLDIxeiI+PC9wYXRoPjxwYXRoIGNsYXNzPSJzdDQiIGQ9Ik0xOCwyMkg2Yy0wLjYsMC0xLTAuNC0xLTFWM2MwLTAuNiwwLjQtMSwxLTFoMTJjMC42LDAsMSwwLjQsMSwxdjE4QzE5LDIxLjYsMTguNiwyMiwxOCwyMnoiPjwvcGF0aD48cGF0aCBjbGFzcz0ic3Q0IiBkPSJNMiwxOEwyLDZjMC0wLjYsMC40LTEsMS0xbDE4LDBjMC42LDAsMSwwLjQsMSwxbDAsMTJjMCwwLjYtMC40LDEtMSwxTDMsMTlDMi40LDE5LDIsMTguNiwyLDE4eiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvZz48Zz48cGF0aCBkPSJNMTcsNS4xQzE1LjYsMy43LDE0LDMsMTIsM2MtMS44LDAtMy42LDAuNy01LDIuMWMtMi41LDIuNS0yLjcsNi4zLTAuNyw5LjFMMTIsMjJsNS43LTcuOUMxOS43LDExLjQsMTkuNCw3LjUsMTcsNS4xeiAgICBNMTIsMTNjLTEuNywwLTMtMS4zLTMtM3MxLjMtMywzLTNzMywxLjMsMywzUzEzLjcsMTMsMTIsMTN6Ij48L3BhdGg+PC9nPjwvc3ZnPg==");
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: center;
}

.section-text {
  color: #000;
  background: #eee;
  border: solid #b9b9b9;
  border-width: 1px 1px 1px 1px;
  padding: 0px 20px;
  font-size: 14px;
  font-weight: 400;
}

.within {
  border-width: 1px 1px 1px 1px;
}
.within-mobile {
  border-width: 1px 1px 1px 1px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.miles {
  border-width: 1px 0px 1px 1px;
}
.miles-mobile {
  border-width: 1px 1px 1px 1px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.no-location-input {
  outline: 1px solid red;
  z-index: 2;
}

.section-wrapper-location {
  display: flex;
  flex: 6 1 auto;
  height: 42px;
}
.section-wrapper-miles {
  display: flex;
  flex: 1 1 auto;
  height: 42px;
}
.section-wrapper-mobile {
  margin-bottom: 30px;
}
</style>

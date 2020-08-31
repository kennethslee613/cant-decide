<template>
  <div
    :class="{'card': !mobile, 'card-mobile': mobile}"
  >
    <div class="header">
      <h3 class="name">{{randomRestaurant.name}}</h3>
      <img
        class="star"
        src="star.svg"
        alt="stars"
      />
      <h4 class="rating">{{randomRestaurant.rating}}</h4>
    </div>
    <div>
      <p class="address">{{randomRestaurant.vicinity}}</p>
    </div>
    <div class="map-container">
      <div id="map"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RandomRestaurantCard',
  props: {
    randomRestaurant: Object,
    mobile: Boolean
  },
  data() {
    return {
      map: null
    };
  },
  mounted() {
    const coordinates = new window.google.maps.LatLng(this.randomRestaurant.geometry.location.lat(), this.randomRestaurant.geometry.location.lng());
    this.map = new window.google.maps.Map(document.getElementById('map'), {
      center: coordinates,
      zoom: 15,
      streetViewControl: false,
      mapTypeControl: false
    });

    new window.google.maps.Marker({
      position: coordinates,
      map: this.map,
      title: this.randomRestaurant.name
    })
  }
}
</script>

<style scoped>
.card {
  background: #ffffff;
  border: solid #b9b9b9;
  border-width: 1px;
  border-radius: 4px;
  padding: 30px;
  width: 70%;
  margin: 0 auto;
}
.card-mobile {
  background: #ffffff;
  border: solid #b9b9b9;
  border-width: 1px;
  border-radius: 4px;
  padding: 15px;
}

h3 {
  margin: 0px 0px 20px 0px;
}

p {
  margin: 0px 0px 10px 0px;
}

.header {
  display: flex;
}

.name {
  flex: 9 9 auto;
  overflow: auto;
  word-wrap: break-word;
}

.address {
  overflow: auto;
  word-wrap: break-word;
}

.star {
  flex: 0 0 auto;
  height: 20px;
  padding-top: 2px;
}

.rating {
  flex: 1 1 auto;
  margin: 0px 0px 10px 0px;
  padding-top: 2px;
}

.map-container {
  height: 250px;
  width: 100%;
}

.map-container-mobile {
  height: 250px;
  width: 100%;
}

#map {
  height: 100%;
  width: 100%;
}
</style>

// Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoiYWFuZG5vdGEiLCJhIjoiY2lneTV4d3g2MHYxOXZxbTNkcWI2OGQwOSJ9.s8wX-nwixls9wgf34KBPFQ';

// Variable that loads the map - this is connected to div id="map"
var map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/aandnota/cknaexn0w0ewf18mkci052lea', // style URL
  center: [0, 0], // starting position [lng, lat]
  zoom: 1 // starting zoom
});

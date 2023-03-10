// Add console.log to check to see if our code is working.
console.log("working");


// Create the map object with a center and zoom level.
// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6214, -122.3790], 5);
let line = [
  [33.9416, -118.4085],
  [37.6214, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];
// Create a polyline using the line coordinates and make the line red.
// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
  color: "yellow"
}).addTo(map);
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// // Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// //  Add a marker to the map for Los Angeles, California.
// // An array containing each city's location, state, and population.
// // Get data from cities.js
// let cityData = cities;


// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//   console.log(city)
//   L.circleMarker(city.location,{
//     radius:city.population/100000
//   })
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population + "</h3>")
// .addTo(map);
// });
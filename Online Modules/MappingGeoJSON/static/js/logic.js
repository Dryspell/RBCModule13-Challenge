if (API_KEY) {console.log("API Key Successfully Loaded");}

// //GEOMETRY OBJECTS
// "geometry":{
//     "type":"Point",
//     "coordinates": [-118.4, 33.9]
// },

// "geometry":{
//     "type":"MultiPoint",
//     "coordinates": [-118.4, 33.9], [-118.5, 34.0]
// },

// "geometry":{
//     "type":"LineString",
//     "coordinates": [[-118.4, 33.9],[-122.4, 37.6]]
// },

// "geometry":{
//     "type":"MultiLineString",
//     "coordinates":
//         [[-118.4, 33.9],[-106.4, 31.8]],
//         [[-118.4, 33.9],[-123.2, 44.1]]
// },

// "geometry": {
//     "type": "Polygon",
//      "coordinates":
//     [
//      [ [ -122.446, 37.861 ], [ -122.438, 37.868 ], [ -122.430, 37.872 ] ]
//     ]
// }

// "geometry": {
//     "type": "MultiPolygon",
//     "coordinates": [
//      [ [ -122.446, 37.861 ], [ -122.438, 37.868 ], [ -122.430, 37.872 ] ],
//      [ [ -122.378, 37.826 ], [ -122.377, 37.830 ], [ -122.369, 37.832 ] ]
// ]

// //GEOMETRY COLLECTION
// {
//     "type": "GeometryCollection",
//     "geometries": [
//         {
//           "type":"Point",
//         "coordinates": [-118.4, 33.9]
//        }
//         },
//         {
//            "type":"LineString",
//            "coordinates": [
//               [-118.4, 33.9],[-122.4, 37.6]
//             ]
//         }
//     ]
//  }

// //  Features Object
// {
//     type: "Feature",
//     properties: {
//     mag: 1.88,
//     place: "6km SE of Pahala, Hawaii",
//     time: 1573766377230,
//     type: "earthquake",
//     title: "M 1.9 - 6km SE of Pahala, Hawaii"
//     },
//     geometry: {
//     type: "Point",
//     coordinates: [
//     -155.4329987,
//     19.1634998
//     ]},
//   }

// //   FEATURE COLLECTION OBJECT 
// {"type":"FeatureCollection","features":
// [
//   {
//     "type":"Feature","properties":{
// "airline":"AA","airline_id":"24","src":"LAX","dst":"ABQ","dst_id":"4019","stops":"0","equipment":"CRJ CR7"},"geometry":{
// "type":"LineString",
// "coordinates":[[-118.4079971,33.94250107],[-106.609001,35.040199]]}
// },
// {
// "type":"Feature","properties":{
// "airline":"AA","airline_id":"24","src":"LAX","src_id":"3484","dst":"ANC","dst_id":"3774","codeshare":"Y","stops":"0","equipment":"737"},"geometry":{
// "type":"LineString",
// "coordinates":[[-118.4079971,33.94250107],[-149.99600219726562,61.174400329589844]]}
//   },
// {
//   "type":"Feature","properties":{
// "airline":"AA","airline_id":"24","src":"LAX","src_id":"3484","dst":"AUS","dst_id":"3673","codeshare":"","stops":"0","equipment":"M83 738"},"geometry":{
// "type":"LineString",
// "coordinates":[[-118.4079971,33.94250107],[-97.6698989868164,30.194499969482422]]}
//   }
// ]
// }


// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport).addTo(map);

// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, {
    // We turn each feature into a marker on the map.
    pointToLayer: function(feature, latlng) {
        console.log(feature);
        return L.marker(latlng).bindPopup("<h2>" + feature.properties.city + "</h2>");
    }
}).addTo(map);

L.geoJSON(data, {
onEachFeature: function(feature, layer) {
    layer.bindPopup();
    }
});

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
streets.addTo(map);
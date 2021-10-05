let myLat=48.4284;
let myLong=-123.3656;
let myLocation = new google.maps.LatLng(myLat, myLong);

let map;
let service;
let infoWindowPark;
let infoWindowCurrentLocation;

let markers = [];

window.onload = initMap;

function initMap() { 
  

  
  map = new google.maps.Map(document.getElementById("map"), {
    center: myLocation,
    zoom: 13
  });
  searchForParks(myLocation);
    infoWindowCurrentLocation = new google.maps.InfoWindow();
  infoWindowPark = new google.maps.InfoWindow();
  
  const locationButton = document.createElement("button");
  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  
  searchForParks(myLocation);
  
  
map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: 48.4475,
            lng: -123.4956,
          };

          infoWindowCurrentLocation.setPosition(pos);
          infoWindowCurrentLocation.setContent("Location found.");
          infoWindowCurrentLocation.open(map);
          map.setCenter(pos);
          
          searchForParks(pos);
        },
        () => {
          handleLocationError(true, infoWindowCurrentLocation, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindowCurrentLocation, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

function searchForParks(location){
  
  let request = {
    location: location,
    radius: "500",
    query:"park"
  };
  
  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, processParks);
}

function processParks(results, status){
  if (status == google.maps.places.PlacesServiceStatus.OK){
    deleteMarkers();
    
    for(let i = 0; i <results.length; i++){
      let place = results[i];
      console.log(place);
      createMarker(place);
    }
  }
}
function createMarker(place){
    if (!place.geometry || !place.geometry.location) return;
  
  const scaledIcon = {
    utl: place.icon,
    scaledSize: new google.maps.Size(30,30),
    origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0)
  }
  
  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
    icon: scaledIcon,
    title:place.name
  });
  google.maps.event.addListener(marker, "click", () => {
    let contentString = "<h3>" + place.name + "</h3>" + "Rating: <b>"
    + place.rating +"</b> / 5 <p>" + place.formatted_addres +"</p>";
    
    infoWindowPark.setContent(place.name || "");
    infoWindowPark.open(map, marker);
  });
  
  markers.push(marker);
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}

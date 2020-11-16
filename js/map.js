'use static'

ymaps.ready(init);

function init(){
  var myMap = new ymaps.Map("map", {
  center: [57.762522, 40.945537],
  zoom: 13
  });

  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point",
      coordinates: [57.762522, 40.945537]
    }
  });

  myMap.geoObjects.add(myGeoObject);
}

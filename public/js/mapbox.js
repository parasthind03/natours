/*eslint-disable*/
export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoicGFyYXN0aGluZCIsImEiOiJja3RpYWFkOHYwOTgxMndxcmJnbTYxOWF2In0.W87orfcHVjeVBhpe1ZM45w';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/parasthind/cktiatejg14t017rtpe7brxgm',
    scrollZoom: false
    // center: [-118.113491,34.111745],
    // zoom: 4
    //interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    //Create Marker
    const el = document.createElement('div');
    el.className = 'marker';

    //Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    //Add pop-up
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    //Extends map bound to the current location
    bounds.extend(loc.coordinates);

    map.fitBounds(bounds, {
      padding: {
        top: 200,
        bottom: 150,
        left: 100,
        right: 100,
      },
    });
  });
};

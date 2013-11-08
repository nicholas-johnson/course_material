$(function() {
  if (navigator && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition( function(position) {
      var lat = position.coords.latitude
      var lng = position.coords.longitude
      $('body').append('<p>Lat: ' + lat + '</p>');
      $('body').append('<p>Lng: ' + lng + '</p>');
    });
  }
});



// Example Code
//
// if (navigator && navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(
//     function(position) {
//       var lat = position.coords.latitude
//       var lng = position.coords.longitude
//       $('body').append('<p>Lat: ' + lat + '</p>');
//       $('body').append('<p>Lng: ' + lng + '</p>');
//     }, function(err) {
//       $('body').append('<p>Geocoding error.' + err.code + '</p>');
//     });
// } else {
//   $('body').append('Geolocation is not supported.');
// }
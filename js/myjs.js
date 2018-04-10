
$(function() {
 $('#scroll1').click(function(){
	   $('html, body').animate({
	    scrollTop: $("#about").offset().top
	}, 1000);
 });
});



$(function() {
 $('#scroll2').click(function(){
	   $('html, body').animate({
	    scrollTop: $("#references").offset().top
	}, 1000);
 });
});




function myMap() {
  var wellington = new google.maps.LatLng(-41.2865, 174.7462);
  var amsterdam = new google.maps.LatLng(-41.2765, 174.7762);
  var london = new google.maps.LatLng(-41.2665, 174.782);

  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: amsterdam, zoom: 13};
  var map = new google.maps.Map(mapCanvas,mapOptions);

  var flightPath = new google.maps.Polyline({
    path: [wellington, amsterdam, london],
    strokeColor: "#0000FF",
    strokeOpacity: 0.8,
    strokeWeight: 2
  });
  flightPath.setMap(map);
}


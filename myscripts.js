
function myfunction(){
    document.getElementById("p01").innerHTML = "You Don't deserve any discount";
    document.getElementById("p01").style.color = "red";
    document.getElementById("b01").style.visibility = "hidden";
}

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(20.5937, 78.9629),
        zoom:10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU&callback=myMap"></script>;

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

function sayHello(){
    $("#title").html('Hello');
    $("#title").click(function(){
        $("#title").html('Hi Festival');
        $("#title").off("click");

    })
};
function swap(){
$(".crop-img").click(function(){
    $("#bigImage").attr('src', 
        $(this).attr('src'));
})
};
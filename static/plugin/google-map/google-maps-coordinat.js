$(function () {

    /* Google Maps (Index) */
    function initialize() {

        // coordinat
        var myLatlng = new google.maps.LatLng(37.837671, 27.845528);

        // google map options
        var mapOptions = {
            zoom: 17,
            center: myLatlng,
			disableDefaultUI: true,
        };

        // google map id
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        // info window content text
        var contentString = '<div class="google-maps-infowindow clearfix">' +
            '<p>Lider CAR (DYNOBİL)</p>' +
            '</div>';

        // info vindow ballon
        var iconMarker = "static/plugin/google-map/icon-marker.png";

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            position: myLatlng,
            visible: true,
            boxStyle: {
                width: "auto"
            },
            disableAutoPan: false,
            pixelOffset: new google.maps.Size(-82, -85),
            closeBoxURL: "static/plugin/google-map/icon-close.png",


            isHidden: false,
            pane: "floatPane",
            enableEventPropagation: false
        });

        // google map marker
        var marker = new google.maps.Marker({
            draggable: true,
            position: myLatlng,
            map: map,
            icon: iconMarker,
        });

        // google map marker toggle
        google.maps.event.addListener(marker, 'click', function () {
            ibLabel.open(map, marker);
        });

        var ibLabel = new InfoBox(infowindow);
        ibLabel.open(map, marker);

    }

    // google map onload
    google.maps.event.addDomListener(window, 'load', initialize);
});
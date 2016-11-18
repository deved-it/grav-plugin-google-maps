jQuery(document).ready(function () {
    var $mapDivs = $('.google-map');

    $mapDivs.each(function (index) {
        var lat = parseFloat($(this).data('lat'));
        var lng = parseFloat($(this).data('lng'));
        var zoom = parseInt($(this).data('zoom'));
        var scrollwheel = Boolean($(this).data('scrollwheel'));
        var panControl = Boolean($(this).data('panControl'));
        var window = $(this).data('infowindow');

        var map = new google.maps.Map(this, {
            center: {lat: lat, lng: lng},
            zoom: zoom,
            scrollwheel: scrollwheel,
            panControl: panControl
        });

        var marker = new google.maps.Marker({
            position: {lat: lat, lng: lng},
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Hello World!'
        });

        if (window) {
            var infowindow = new google.maps.InfoWindow({
                content: window
            });

            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });

            infowindow.open(map, marker);
        }
    });
});

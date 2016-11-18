jQuery(document).ready(function () {
    var $mapDivs = $('.google-map');
    $mapDivs.each(function (index) {
        var lat = parseFloat($(this).data('lat'));
        var lng = parseFloat($(this).data('lng'));
        var zoom = parseInt($(this).data('zoom'));
        var scrollwheel = Boolean($(this).data('scrollwheel'));
        var pancontrol = Boolean($(this).data('pancontrol'));
        var icon = $(this).data('iconurl');
        var window = $(this).data('infowindow');

        var map = new google.maps.Map(this, {
            center: {lat: lat, lng: lng},
            zoom: zoom,
            scrollwheel: scrollwheel,
            panControl: pancontrol
        });

        var marker = new google.maps.Marker({
            position: {lat: lat, lng: lng},
            icon: icon,
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

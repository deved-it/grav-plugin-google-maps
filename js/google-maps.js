jQuery(document).ready(function () {
    var $mapDivs = $('.google-map');
    $mapDivs.each(function (index) {
        var lat = parseFloat($(this).data('lat'));
        var lng = parseFloat($(this).data('lng'));
        var zoom = parseInt($(this).data('zoom'));
        var scrollwheel = Boolean($(this).data('scrollwheel'));
        var draggable = Boolean($(this).data('draggable'));
        var pancontrol = Boolean($(this).data('pancontrol'));
        var icon = $(this).data('iconurl');
        var infowindow = $(this).data('infowindow');
        var content = $(this).data('content');
        var markertitle = $(this).data('markertitle');

        var map = new google.maps.Map(this, {
            center: {lat: lat, lng: lng},
            zoom: zoom,
            scrollwheel: scrollwheel,
            draggable: draggable,
            panControl: pancontrol
        });

        if (infowindow && content  === 'json') {
            try {
                if ( infowindow.length < 1 ) throw 'not an array';
                for ( i = 0 ; i < infowindow.length; i++) {
                    var marker = new google.maps.Marker({
                    position: { lat: infowindow[i].lat, lng: infowindow[i].lng },
                    map: map,
                    icon: icon,
                    title: infowindow[i].key ? infowindow[i].key : ''
                });
                }
            } catch (e) {
                content = 'text';
                infowindow +=  e;
            }
        }
        if (content !== 'json') {
            var marker = new google.maps.Marker({
                position: {lat: lat, lng: lng},
                icon: icon,
                map: map,
                animation: google.maps.Animation.DROP,
                title: markertitle
            });

            if (infowindow) {
                var infowindow_m = new google.maps.InfoWindow({
                    content: infowindow
                });

                marker.addListener('click', function () {
                    infowindow_m.open(map, marker);
                });

                infowindow_m.open(map, marker);
            }
        }
    });
});

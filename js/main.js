;(function ($) {
    "use strict";

    const bestSlider = $('.ba-best-slider');

    bestSlider.slick({
        infinite: false,
        adaptiveHeight: true,
        fade: false,
        slide: '.ba-section',
        prevArrow: '.ba-best-slider-prev',
        nextArrow: '.ba-best-slider-next',
        dots: true
    });

    const hotSlider = $('.ba-hot-slider');

    hotSlider.slick({
        slide: '.ba-hot-offer',
        fade: true,
        prevArrow: '.ba-hot-slider-prev',
        nextArrow: '.ba-hot-slider-next'
    });

})(jQuery);

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    const baMap = new google.maps.Map(
        document.querySelector('.ba-map'), {
            zoom: 5,
            center: uluru,
            disableDefaultUi: true,
            styles: [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#bdbdbd"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dadada"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#c9c9c9"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                }
            ]
        });

    const markers = {
        rome: {lat: 41.902782, lng: 12.496365},
        madrid: {lat: 40.416775, lng: -3.703790},
        paris: {lat: 48.856613, lng: 2.352222},
    }
    baMap.setCenter(markers.rome);

    const selectCity = document.getElementById('#cities-select');

    // The marker, positioned at Uluru
    for (const city in markers) {
        const uluru = markers[city];

        const marker = new google.maps.Marker({
            position: uluru,
            map: baMap,
            animation: google.maps.Animation.DROP,
            icon: 'img/marker.svg'
        });

        marker.addListener('click', function () {

            const newCenter = this.position;
            baMap.panTo(newCenter);
        });


    }
}

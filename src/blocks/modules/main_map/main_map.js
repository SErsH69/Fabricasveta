import $ from 'jquery';

const MainMap = class MainMap {
    constructor() {}
    mapContact() {
        if ($('#map').length) {
            ymaps.ready(function () {
                var myMap = new ymaps.Map('map', {
                    center: [55.782491, 37.580481],
                    zoom: 16,
                    controls: ['zoomControl', 'fullscreenControl', 'geolocationControl']
                }, {
                    searchControlProvider: 'yandex#search'
                });
            
                var myPlacemark2 = new ymaps.Placemark([55.782491, 37.580481], {
                    hintContent: 'г. Мытищи , ул. Лётная, стр. 19, офис 343',
                    balloonContent: 'г. Мытищи , ул. Лётная, стр. 19, офис 343'
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: '../img/svg/marker.svg',
                    iconImageSize: [65, 64],
                    iconImageOffset: [-32, -64]
                });
            
                myMap.geoObjects.add(myPlacemark2);
            });
        }
    }
    init() {
        this.mapContact();
    }
}

export default MainMap;
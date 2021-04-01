ymaps.ready(init);

function init() {
    // Создание карты.
    var map = new ymaps.Map("map", {
        center: [47.20916957427229, 39.5956715],
        zoom: 15,
        controls: ['zoomControl'],
    });
    map.behaviors.disable('scrollZoom');
    var myPlacemark = new ymaps.Placemark(
        [47.20916957427229, 39.5956715],
        {},
        {
            iconLayout: 'default#image',
            iconImageHref: './images/map_icon.png',
            iconImageSize: [30, 42],
            iconImageOffset: [-5, -38]
        }
    );
   
    map.geoObjects.add(myPlacemark);
}
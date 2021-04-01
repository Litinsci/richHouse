import noUiSlider from 'nouislider';
document.addEventListener("DOMContentLoaded", () => {
    const priceSlider = document.getElementById('r-slider__prise');
    const areaSlider = document.getElementById('r-slider__area');
    noUiSlider.create(priceSlider, {
        start: [2709364],
        connect: 'upper',
        // limit: 500000,
        // tooltips: true,
        // connect: true,
        // padding: 6,
        range: {
            'min': 980513,
            'max': 3870520
        },
    });

    priceSlider.noUiSlider.on('update', function( values, handle ) {
        document.querySelector(".project-selection__input-r-slider__prise").value = priceSlider.noUiSlider.get();
     });
       

    noUiSlider.create(areaSlider, {
        start: [41],
        // limit: 500000,
        // tooltips: true,
        // connect: true,
        // padding: 6,
        connect: 'upper',
        range: {
            'min': 41,
            'max': 250
        },
    });

    areaSlider.noUiSlider.on('update', function( values, handle ) {
        document.querySelector(".project-selection__input-r-slider__area").value = areaSlider.noUiSlider.get();
     });
});


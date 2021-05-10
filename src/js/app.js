import '../scss/app.scss';
import './animations';
import {tns} from 'tiny-slider/src/tiny-slider'

window.addEventListener('load', () => {

    // Homepage Slider
    if(document.querySelector('.hero-section')) {
        document.querySelector('.hero-section').style.display = 'block';
        document.querySelector('.homepage-slider-loading').style.display = 'none';

        const homepageSlider = tns({
            container: '.homepage-slider',
            arrowKeys: true,
            mouseDrag: true,
            autoHeight: true,
            autoplay: false,
            autoplayButtonOutput: false,
            controlsText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
            navPosition: 'bottom',
        })
    }
})

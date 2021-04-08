import '../scss/app.scss';
import {tns} from 'tiny-slider/src/tiny-slider'
import Aos from 'aos';

window.addEventListener('load', () => {
    Aos.init();

    // Homepage Slider
    if(document.querySelector('.hero-section')) {
        document.querySelector('.hero-section').style.display = 'block';

        const homepageSlider = tns({
            container: '.homepage-slider',
            arrowKeys: true,
            mouseDrag: true,
            autoHeight: true,
            autoplay: true,
            autoplayButtonOutput: false,
            controlsText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
            navPosition: 'bottom',
        })
    }
})

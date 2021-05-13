import '../scss/app.scss';
import './animations';
import {tns} from 'tiny-slider/src/tiny-slider'

window.addEventListener('load', () => {
    stickyHeaderInit()

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

function stickyHeaderInit() {
    const header = document.querySelector('header.header');
    const headerHeight = header.offsetHeight
    const headerMenu = header.querySelector('.header-section')

    window.addEventListener('scroll', () => {
        if(window.pageYOffset > (headerHeight + 15)) {
            headerMenu.classList.add('fixed')
        }else {
            headerMenu.classList.remove('fixed')
        }
    })
    
    console.log()
}

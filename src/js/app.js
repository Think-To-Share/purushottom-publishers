import '../scss/app.scss';
import './animations';
import {tns} from 'tiny-slider/src/tiny-slider'
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from 'gsap/gsap-core';

gsap.registerPlugin(ScrollToPlugin);

window.addEventListener('load', () => {
    stickyHeaderInit()

    const backToTopBtn = document.querySelector('.back-to-top')
    if(backToTopBtn) {
        window.addEventListener('scroll', () => {
            if(window.pageYOffset > 200) {
                backToTopBtn.classList.remove('d-none')
            }else {
                backToTopBtn.classList.add('d-none')
            }
        })

        backToTopBtn.addEventListener('click', () => {
            gsap.to(window, {
                scrollTo: {
                    y: 0,
                },
                duration: 2,
            })
        })
    }

    // Homepage Slider
    if(document.querySelector('.hero-section')) {
        document.querySelector('.hero-section').style.display = 'block';
        document.querySelector('.homepage-slider-loading').style.display = 'none';

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

    if(true) {
        tns({
            container: '.best-seller-slider',
            controls: false,
            mouseDrag: true,
            autoHeight: true,
            autoplay: true,
            autoplayButtonOutput: false,
            nav: false,
            responsive: {
                768: {
                    controls: true,
                    controlsText: ["<i class='fas fa-chevron-left fa-2x'></i>", "<i class='fas fa-chevron-right fa-2x'></i>"],
                },
                1024: {
                    controlsText: ["<i class='fas fa-chevron-left fa-3x'></i>", "<i class='fas fa-chevron-right fa-3x'></i>"],
                }
            }
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

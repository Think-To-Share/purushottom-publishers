import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
    const upcomingBooksAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: '.Books-section',
            start: 'top top'
        }
    })
    
    upcomingBooksAnimation.from('.Books-section .title', {
        autoAlpha: 0,
        y: 20,
        duration: 1,
        ease: 'power4.in'
    })

    upcomingBooksAnimation.from('.Books-section .sub-title', {
        scale: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.3)'
    })

    upcomingBooksAnimation.from('.Books-section .section-main .book-item', {
        autoAlpha: 0,
        rotateY: 180,
        duration: 0.5,
        stagger: 0.6,
    }, '<')

    const bestSellerAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: '.bestseller-section'
        }
    })

    bestSellerAnimation.from('.bestseller-section h2', {
        autoAlpha: 0,
        y: 20,
        duration: 1,
        ease: 'power4.in'
    })

    bestSellerAnimation.from('.bestseller-section .sub-title', {
        scale: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.3)'
    })
})

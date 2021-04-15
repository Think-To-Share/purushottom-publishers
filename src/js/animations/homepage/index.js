import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
    const upcomingBooksAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: '.Books-section',
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
            trigger: '.bestseller-section',
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
    
    bestSellerAnimation.from('.bestseller-section .section-main .shop-boxes .box .text-box .product-title', {
        autoAlpha: 0,
        y: 50,
        stagger: 0.3,
    })

    bestSellerAnimation.from('.bestseller-section .section-main .shop-boxes .box .text-box .product-small-title', {
        autoAlpha: 0,
        x: -50,
        stagger: 0.3,
    })

    bestSellerAnimation.from('.bestseller-section .section-main .shop-boxes .box .text-box .shop-btn', {
        autoAlpha: 0,
        scale: 0.3,
        ease: 'power3.out',
        duration: 1,
        stagger: 0.3
    })

    const recentLaunchAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: '.recent-launch-section',
        }
    })

    recentLaunchAnimation.from('.recent-launch-section .recent-launch-text-box', {
        autoAlpha: 0,
        scale: 0,
        duration: 2,
        ease: 'power3.out'
        // ease: 'elastic.out(1, 0.3)'
    })

    recentLaunchAnimation.from('.recent-launch-section h2', {
        autoAlpha: 0,
        x: -60
    })

    recentLaunchAnimation.from('.recent-launch-section p', {
        autoAlpha: 0,
        y: 60,
    })

    recentLaunchAnimation.from('.recent-launch-section .view-more-btn', {
        autoAlpha: 0,
        scale: 2,

    })

    const allBooksAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: '.all-books-section'
        }
    })

    allBooksAnimation.from('.all-books-section .title', {
        autoAlpha: 0,
        y: 20,
        duration: 1,
        ease: 'power4.in'
    })

    allBooksAnimation.from('.all-books-section .sub-title', {
        scale: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.3)'
    })

    allBooksAnimation.from('.all-books-main-section .book-item', {
        autoAlpha: 0,
        rotateY: 180,
        duration: 0.5,
        stagger: 0.6,
    }, '<')
})

const scrolling = (upSelector) => {

    const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });

    // Scrolling with raf

    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.3;
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress/speed, widthTop + toBlock) : Math.min(widthTop + progress/speed, widthTop + toBlock));

                    document.documentElement.scrollTo(0, r);

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });



//    const elem = document.documentElement,
//         body = document.body;

//    const calcScroll = () => {
//        upElem.addEventListener('click', function(e) {
//         let scrollTop = Math.round(body.scrollTop || elem.scrollTop);

//         if (this.hash !== '') {
//             e.preventDefault();

//             let hashElem = document.querySelector(this.hash),
//                 hashElemTop = 0;

//            while (hashElem.offsetParent) {
//                hashElemTop += hashElem.offesTop;
//                hashElem = hashElem.offsetParent;
//            }
           
//            hashElemTop = Math.round(hashElemTop);
//            smoothScroll(scrollTop, hashElemTop, this.hash);
//         }
//        });
//    };

//    const smoothScroll = (from, to, hash) => {
//     let timeInterval = 1,
//         prevScrollTop,
//         speed;

//         if (to > from) {
//             speed = 30;
//         } else {
//             speed = -30;
//         }

//         let move= setInterval(function() {
//             let scrollTop = Math.round(body.scrollTop || elem.scrollTop);

//             if (
//                 prevScrollTop === scrollTop || 
//                 (to > from && scrollTop >= to) ||
//                 (to < from && scrollTop <= to)
//             ) {
//                 clearInterval(move);
//                 history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
//             } else {
//                 body.scrollTop += speed;
//                 elem.scrollTop += speed;
//                 prevScrollTop = scrollTop;
//             }
//         }, timeInterval);

//         calcScroll();
//    };


};

export default scrolling;
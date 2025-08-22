let btnTrigger = document.getElementById('workTrigger');
let workDetail = document.getElementById("workDetail");
let workContent = document.getElementById("workAbout");

if (!!btnTrigger) {
    btnTrigger.addEventListener("click", function () {
        btnTrigger.classList.toggle('is-open');
        workDetail.classList.toggle('is-open');

        if (window.innerWidth > 768) {
            workDetail.classList.toggle('md:gap-8');
            let workCol = document.querySelectorAll('.workItem');
            workCol.forEach(el => {
                el.classList.toggle('w-1/2');
            })

            let workQuote = document.querySelectorAll('blockquote');
            workQuote.forEach(el => {
                el.classList.toggle('lg:w-1/2');
            })

            let elToScroll = document.getElementById('workAbout-inner');
            addFixedOnScroll('workAbout-inner');

            let farFromTop = window.scrollY;
            let notOpen = workDetail.classList.contains('is-open');
            if (notOpen) {
                if (farFromTop > 350) {
                    scrollToTop()
                }
            }

        }
    })
    if (window.innerWidth > 768) {
        addFixed(btnTrigger);
    }
}

function addFixedOnScroll(elementId) {
    const el = document.getElementById(elementId);

    function checkScroll() {
        const scrollY = window.scrollY;
        const elementBottom = el.getBoundingClientRect().bottom;
        const parent = el.parentNode;
        const elWidth = parent.clientWidth;
        el.style.width = `${elWidth}px`;
        
        const siblingEl = parent.previousElementSibling;
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const siblingBottom = siblingEl.getBoundingClientRect().bottom;
        console.log(scrollY,elementBottom,viewportHeight)

        if (scrollY >= elementBottom && elementBottom <= viewportHeight) {
            el.classList.add('fixed');
            el.classList.add('pinned');
            if(siblingBottom <= viewportHeight) {
                el.classList.remove('fixed');
                el.classList.add('absolute');
            } 
            else {
                el.classList.remove('absolute');
            }
        } else {
            el.classList.remove('fixed');
            el.classList.remove('pinned');
        }
    }

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
}


// function scrollBottom(el, elParent) {

//     window.addEventListener('scroll', () => {
//         const scrollY = window.scrollY;
//         const elOffset = el.getBoundingClientRect().height - 120;
//         const parentHeight = elParent.getBoundingClientRect().height - 120;
//         const elWidth = el.parentNode.clientWidth;
//         console.log(elWidth)
//         el.style.width = `${elWidth}px`;
    
//         if (scrollY >= elOffset) {
//             el.classList.add('pinned');
//             el.classList.add('fixed');
//             if (scrollY >= parentHeight) {
//                 el.classList.remove('fixed');
//                 el.classList.add('absolute');
//             } else {
//                 el.classList.remove('absolute');
//             }
//         } else {
//             el.classList.remove('pinned');
//             el.classList.remove('fixed');
//         }
//     })
// }

function addFixed(el) {
    window.addEventListener('scroll', () => {
        const elHeight = el.getBoundingClientRect().top;
        const parentHeight = workDetail.getBoundingClientRect().top;
        if (elHeight <= 26) {
            el.classList.add('pinned');
            if (parentHeight >= 138) {
                el.classList.remove('pinned');
            }
        } else {
            el.classList.remove('pinned');
        }
    })
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

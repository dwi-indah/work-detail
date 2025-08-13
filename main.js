let btnTrigger = document.getElementById('workTrigger');
let workDetail = document.getElementById("workDetail");

if (!!btnTrigger) {
    btnTrigger.addEventListener("click", function () {
        workDetail.classList.toggle('is-open');
        btnTrigger.classList.toggle('is-open');
        if (window.innerWidth > 1024) {
            let workCol = document.querySelectorAll('.workItem');
            workCol.forEach(el => {
                el.classList.toggle('w-1/2');
            })

            let workQuote = document.querySelectorAll('blockquote');
            workQuote.forEach(el => {
                el.classList.toggle('lg:w-1/2');
            })

            let elToScroll = document.getElementById('workAbout-inner');
            scrollBottom(elToScroll, workDetail);

        }
    })
    if (window.innerWidth > 1024) {
        addFixed(btnTrigger);
    }
}

function scrollBottom(el, elParent) {
    const bodyElement = document.body;
    const rect = bodyElement.getBoundingClientRect().top;

    if (rect <= -250) {
        console.log("true")
        scrollToTop()
    }
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const elOffset = el.getBoundingClientRect().height - 120;
        const parentHeight = elParent.getBoundingClientRect().height - 120;
        const elWidth = el.getBoundingClientRect().width;
        console.log(scrollY, parentHeight, elParent.getBoundingClientRect())

        if (scrollY >= elOffset) {
            el.classList.add('pinned');
            el.classList.add('fixed');
            el.style.width = `${elWidth}px`;
            if (scrollY >= parentHeight) {
                console.log('true')
                el.classList.remove('fixed');
                el.classList.add('absolute');
            } else {
                el.classList.remove('absolute');
            }
        } else {
            el.classList.remove('pinned');
            el.classList.remove('fixed');
        }
    })
}

function addFixed(el) {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
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
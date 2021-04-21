const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () { // 돋보기 모양을 클릭하였을때
    searchInputEl.focus();
});


searchInputEl.addEventListener('focus', function() { //포커스가 됬을때
    searchEl.classList.add('focused'); //특정요소에 클래스정보를 가지고있는 객체에서 추가하겠다.
    searchInputEl.setAttribute('placeholder', '통합검색'); // html 인수를 지정할때
});

searchInputEl.addEventListener('blur', function() { //포커스가 해제됬을때
    searchEl.classList.remove('focused'); //특정요소에 클래스정보를 가지고있는 객체에서 추가하겠다.
    searchInputEl.setAttribute('placeholder', ''); // html 인수를 지정할때
});


/* 우측 배치 이미지 등장 기능 구현 */

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
    console.log(Window.scrollY);
    if(window.scrollY > 500 ) {
        // 배지 숨기기
        //gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        // 버튼 보이기    
        gsap.to(toTopEl, .2, {
            x: 0
        });
    } else {
        // 배지 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
        //버튼 숨기기
        gsap.to(toTopEl, .2, {
            x: 100
        });
    }
}, 300));
// _.throttle(함수, 시간(ms단위로))


toTopEl.addEventListener('click', function () {
    gsap.to(window, .7, {
        scrollTo: 0
    });
});

/* 비쥬얼 이미지 순차적 등장 기능 구현 */
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7, //0.7 , 1.4, 2.1 ... 으로 동작
        opacity: 1
    });
});

// new Swiper(선택자,옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});
new Swiper('.promotion .swiper-container', {
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데에 보이기
    loop: true,
    autoplay: {
         delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true // 사용자의 페이지 번호 요소 제어 여부
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});
new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});

const promotionEl = document.querySelector('promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
    isHidePromotion = !isHidePromotion
    if (isHidePromotion) {
        // 숨김 처리 isHidePromotion = true
        promotionEl.classList.add('hide');
    } else {
        // 보임 처리 isHidePromotion = false
        promotionEl.classList.remove('hide');
    }
});

function random(min, max) {
    // '.toFixed()'를 통해 반환된 문자 데이터를,
    // 'parseFloat()'을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(
        selector,
        random(1.5, 2.5),
        {
            y: size,
            repeat: -1,
            yoyo: true,
            ease: Power1.easeInOut,
            delay: random(0, delay)
        }
    );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// ScrollMagic
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
            triggerHook: .8 // 뷰포트 시작 : 0 뷰포트 끝 : 1 뷰포트의 일정한 위치에 걸림
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});


// 날짜 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2021
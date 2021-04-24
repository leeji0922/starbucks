// 검색 기능
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


// 날짜 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2021
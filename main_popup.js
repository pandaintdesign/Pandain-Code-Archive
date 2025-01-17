 // X버튼 클릭 닫기
 function hideIdx(){
    const indexPopup = document.getElementById('dim_popup');
    const Xbtn = document.querySelector('.closeMark');

    Xbtn.addEventListener('click', ()=>{
        indexPopup.classList.add('hide');
    })
}



// 현재 시간을 기준으로 1일 동안 display='none' 상태 유지
function setHideUntil(name, durationInMs) {
    const hideUntil = Date.now() + durationInMs;
    localStorage.setItem(name, hideUntil);
}

function isHidden(name) {
    const hideUntil = localStorage.getItem(name);
    return hideUntil && Date.now() < parseInt(hideUntil, 10);
}

// DOMContentLoaded 이벤트로 초기화
document.addEventListener('DOMContentLoaded', () => {
    const popupElement = document.querySelector('.todayClose');
    const popupLink = document.getElementById('dim_popup');

    // localStorage 확인: 노출 여부 결정
    if (isHidden('dimPopupHidden')) {
        popupLink.style.display = 'none'; // 숨김 상태 유지
    }

    // "오늘 하루 열지 않기" 클릭 이벤트
    popupElement.addEventListener('click', (event) => {
        if (event.target.closest('.todayClose')) {
            setHideUntil('dimPopupHidden', 24 * 60 * 60 * 1000); // 1일(24시간) 동안 유지
            popupLink.style.display = 'none'; // 팝업 숨김
        }
    });
});



// 스와이퍼 기능
const swiper = new Swiper('.swiper', {
slidesPerView : 1,  //초기값 설정 모바일값이 먼저!!
      loop: true,
      spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
  
      breakpoints: {
          768:{
              slidesPerView: 1,  //브라우저가 768보다 클 때
              spaceBetween: 10,
          },
      },
      autoplay: {
          delay: 4000,
      }
});




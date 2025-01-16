



function closePopup(){
    const closePopup = document.querySelectorAll('.hidePopup');
    const popupArea = document.getElementById('dim_popup');

    if(closePopup.addEventListner('click')){
        popupArea.addClass('open');
    }else{
        popupArea.removeClass('open');
    }
       
}





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

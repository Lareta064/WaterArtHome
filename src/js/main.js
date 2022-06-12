document.addEventListener("DOMContentLoaded", function (){
	/*============= menu toggle ===============*/
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('#mobile-menu');
  const overlayBlock = document.querySelector('#overlay');
  const bodyEl = document.body;
  
  menuToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    
    if (this.classList.contains('active')) {
       
      this.classList.remove('active');
      mobileMenu.classList.remove('active');
      overlayBlock.classList.remove('active');
      bodyEl.classList.remove('noscroll');
    } else {
        this.classList.add('active');
	      mobileMenu.classList.add('active');
      	overlayBlock.classList.add('active');
      	bodyEl.classList.add('noscroll');
      }
    });

    /*======== закрывать моб меню при ресайзе экрана ====== */
    window.addEventListener('resize', function () {
      menuToggle.classList.remove('active');
      mobileMenu.classList.remove('active');
      overlayBlock.classList.remove('active');
      bodyEl.classList.remove('noscroll');
    });


    /*======== закрывать моб меню по клику на ссылку внутри этого меню ====== */
    if(mobileMenu){
      const mobMenuLinks = mobileMenu.querySelectorAll('a');
      for(let item of mobMenuLinks){
       item.addEventListener('click', function () {
         menuToggle.classList.remove('active');
         mobileMenu.classList.remove('active');
         overlayBlock.classList.remove('active');
         bodyEl.classList.remove('noscroll');
       });
      }
    }

});/*закрываем самую первую строчку, загрузка страницы */

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
  /*============tabs ==================*/
  function pageTabs(tabBtn, tabContent) {
    const menuItems = tabBtn.querySelectorAll('[data-role]');
    const menuItemContent = tabContent.querySelectorAll('[data-content]');
    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener('click', (e) => {
        e.preventDefault();
        for (let j = 0; j < menuItems.length; j++) {
          if (j !== i) {
            menuItems[j].classList.remove('active');
          }
          if (j == i) {
            menuItems[j].classList.add('active');
          }
        }
        const thisData = menuItems[i].getAttribute('data-role');
        for (let block of menuItemContent) {
          block.classList.remove('active');
          const contentData = block.getAttribute('data-content');
          if (thisData == contentData && menuItems[i].classList.contains('active')) {
            block.classList.add('active');
          }
        }
      });
    }
  }
  const servicesTabs = document.getElementById('services-tabs');
  if (servicesTabs) {
  pageTabs(servicesTabs, servicesTabs);
}
});/*закрываем самую первую строчку, загрузка страницы */

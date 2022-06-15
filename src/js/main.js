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
  const priceTabs = document.getElementById('price-tabs');
  const priceTabContentDesktop = document.getElementById('price-tabs-desktop');
  const priceTabContentMobile = document.getElementById('price-tabs-mobile');
  if (servicesTabs) {
    pageTabs(servicesTabs, servicesTabs);
  }
  if (priceTabs) {
    pageTabs(priceTabs, priceTabContentDesktop);
    pageTabs(priceTabs, priceTabContentMobile);
  }

  // ========= КАСТОМНЫЙ СЕЛЕКТ =============
	const customSelect = document.querySelectorAll('.custom-select');
	if(customSelect){	
		
	for(let item of customSelect){
		item.addEventListener('click', function(e){
			const thisList = item.querySelector('.select-list');
			const thisInput = item.querySelector('input');
			const thisIconArrow = item.querySelector('.select-icon');
			const thisListItem = item.querySelectorAll('li');
			const thisField = item.querySelector('.select-field');

			if(e.target == thisField){

				if(thisList.classList.contains('visible')){
					thisList.style.maxHeight = 0 + "px";
					thisList.classList.remove('visible');
					thisIconArrow.classList.remove('rotate');
					
				}else{
					thisList.classList.add('visible');
					thisList.style.maxHeight = thisList.scrollHeight + "px";
					thisIconArrow.classList.add('rotate');
				}				
			}

			if(e.target.tagName == 'LI'){
				for(let item of thisListItem){
					item.classList.remove('current');
				}
				const curItemtext = e.target.textContent;
			  thisField.textContent = curItemtext;
        // console.log(thisInput.value);
				e.target.classList.add('current');
				thisList.style.maxHeight = 0 + "px";
				thisList.classList.remove('visible');
				thisIconArrow.classList.remove('rotate');
			}
		});
	}
}
/* portfolio slider main page */
  let swiper = new Swiper(".portfolio-main", {
      slidesPerView: 1,
      spaceBetween: 10,
      speed:800,
      loop:true,
      pagination: {
        el: ".portfolio-main-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
				424: {
					slidesPerView: 1.2,
					spaceBetween: 10,
				},
        576: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 10,
				},
        1200: {
					slidesPerView: 4,
					spaceBetween: 10,
				},
         1365: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
			}
    });

    /* Review slider */
  let swiperReview = new Swiper(".review-wrapper", {
      slidesPerView: 1,
      spaceBetween: 10,
      speed:800,
      loop:true,
      pagination: {
        el: ".review-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
				424: {
					slidesPerView: 1.2,
					spaceBetween: 10,
				},
        576: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 10,
				},
        1200: {
					slidesPerView: 3,
					spaceBetween: 20,
				}
			}
    });

    /**sertificates */
    
  let swiperSertificates = new Swiper(".sertificates-wrapper", {
      slidesPerView: 1,
      spaceBetween: 10,
      speed:800,
      loop:true,
      pagination: {
        el: ".sertificates-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
				424: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
        576: {
					slidesPerView: 3,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 4,
					spaceBetween: 10,
				},
        1023: {
					slidesPerView: 4,
					spaceBetween: 20,
				}
			}
    });


    /* Показать скрытый текст Секция О компании на Главной*/
    const customTextBlocks = document.querySelectorAll('[data-text-block]');
    if(customTextBlocks.length >0){
      for(item of customTextBlocks){
        const customTextHide = item.querySelector('[data-text-hide]');
        const customTextShowBtn = item.querySelector('[data-text-btn]');
        customTextShowBtn.addEventListener('click', function(){
          if(this.classList.contains('btn-active')){
            this.classList.remove('btn-active');
            this.textContent = 'Подробнее'
            // customTextHide.classList.remove('visible-block');
            customTextHide.style.maxHeight = 0;
          }
          else{
            this.classList.add('btn-active');
            this.textContent = 'Скрыть'
            // customTextHide.classList.add('visible-block');
            customTextHide.style.maxHeight = customTextHide.scrollHeight + 'px';
          }
        });
      }
    }
});/*закрываем самую первую строчку, загрузка страницы */

// const tableWrap = $(".table-wrap");

// tableWrap.on('click', function() {
//   $(this).addClass("--active");
// })

const tableWrap = document.querySelector(".table-wrap");

tableWrap.addEventListener('click' , (e) => {
  // console.log(e)
  const El = e.target;
  El.classList.add("--active");
});


//GNB
// const gnbToggle = $(".btn-sitemap");
// const gnb = $(".gnb");
// const body = $("body");
// const searchBrn = $(".btn-search")

// gnbToggle.on('click', function() {
//   const windowWidth = $(window).width();  // 가로크기 구하기
//   if(windowWidth < 900) {
//     $(this).toggleClass('--active');
//     gnb.toggleClass('--active');
//     searchBrn.toggleClass('--active');
//     body.toggleClass('--hidden')
//   }
// });

// $(window).on('resize' , function(){
//   const windowWidth = $(this).width();
//   if( windowWidth >= 900 ) {
//     gnbToggle.removeClass('--active');
//     gnb.removeClass('--active');
//     searchBrn.removeClass('--active');
//     body.removeClass('--hidden');
//   }
// });


const gnbToggle = document.querySelector(".btn-sitemap");
const gnb = document.querySelector(".gnb");
const body = document.querySelector("body");
const searchBrn = document.querySelector(".btn-search");

gnbToggle.addEventListener('click', () => {
  const windowWidth = window.innerWidth;
  if(windowWidth < 900) {
    gnbToggle.classList.toggle('--active');
    gnb.classList.toggle('--active');
    searchBrn.classList.toggle('--active');
    body.classList.toggle('--hidden')
  }
})

window.addEventListener ('resize' , () => {
  const windowWidth = window.innerWidth;
  if( windowWidth >= 900 ) {
    gnbToggle.classList.remove('--active');
    gnb.classList.remove('--active');
    searchBrn.classList.remove('--active');
    body.classList.remove('--hidden')
  }
});

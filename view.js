$(function() {
    $(".tvcollection").slice(0, 4).show();
    $("#loadmore").on('click', function(e) {
      e.preventDefault();
      $(".card:hidden").slice(0, 4).slideDown();
      if ($(".card:hidden").length == 0) {
        $("#loadless").fadeIn('slow');
        $("#loadmore").hide();
        // $("#loadMore").text('Load only the first 4');
      }
    //   $('html,body').animate({
    //     scrollTop: $(this).offset().top
    //   }, 1500);
    });
  
    $("#loadless").on('click', function(e) {
      e.preventDefault();
      $('.tvcollection:not(:lt(8))').fadeOut();
      $("#loadmore").fadeIn('slow');
      $("#loadless").hide();
  
      desiredHeight = $(window).height();

      $('html,body').animate({
        scrollTop: $(this).offset().top + desiredHeight
      }, 1500);
    });
  
  });



  let loadMoreBtn = document.querySelector('#load-more-btn');
let currentItem = 4;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.newcontainer .box-container')];

    for (var i = currentItem; i < currentItem + 4; i++) {
        boxes[i].style.display = "inline-block";
    }

    currentItem += 4;

    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = "none"
    }

}


const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', ()=>{
    search.classList.toggle('active')
    input.focus()
})
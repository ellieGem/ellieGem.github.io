$(function(){
  var naviOffsetTop = $('navi').offset().top;
  var homeOffsetTop = $('.home').offset().top;
  var aboutOffsetTop = $('.about').offset().top;
  var whyOffsetTop = $('.why').offset().top;
  var howOffsetTop = $('.how').offset().top;
  var servicesOffsetTop = $('.services').offset().top;
  var contactOffsetTop = $('.contact').offset().top;
  
  $(document).on('scroll',function(){
    var scrollTop = $(document).scrollTop;
    var activeLi;
    if(scrollTop < naviOffsetTop){
      activeLi= $('.items >li:nth-child(1)');
    }else if(scrollTop < homeOffsetTop){
      activeLi= $('.items >li:nth-child(2)');
    }else if( scrollTop < aboutOffsetTop){
      activeLi= $('.items >li:nth-child(3)');
       }else if(scrollTop < whyOffsetTop){
         activeLi = $('.items >li:nth-child(4)');
    }else if(scrollTop < howOffsetTop){
      activeLi= $('.items >li:nth-child(5)');
     }else if(scrollTop < servicesOffsetTop ){
       activeLi= $('.items >li:nth-child(6)');
     }else{
     activeLi = $('.items >li:nth-child(7)');
     }
  activeLi.addClass('.active');
  $('.items>li').not(activeLi).removeClass('active');
  });
});

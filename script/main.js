$(document).ready(function(){

  $('.gnb > ul').hover(function(){
    $('.sub').stop().fadeIn();
  },function(){
    $('.sub').stop().fadeOut();
  });

  // $('.gnb > ul > li').hover(function(){
  //   $(this).find('.sub').stop().fadeIn();
  // },function(){
  //   $(this).find('.sub').stop().fadeOut();
  // });



  $('.s_wrap > li:last-child').fadeIn('.s_wrap > li:first-child');
  $('.s_wrap').css('margin-top','-300px');

  function moveleft(){
    $('.s_wrap').animate({'margin-top':'-600px'},500,function(){
      $('.s_wrap > li:first-child').insertAfter('.s_wrap > li:last-child');
      $('.s_wrap').css('margin-top','-300px');
    });
  }

  let Timer = setInterval(moveleft, 3000);

  $('.t_con li:first-child .con').show();

  $('.t_con a').click(function(){
    $('.t_con a').removeClass('act');
    $(this).addClass('act');

    $('.con').hide();
    $(this).next().show();
    return false;
  });

  // 모달창
  let btn = $('.t_con > ul > li:first-child > .con > ul > li > a:first-child');
  $(btn).click(function(){
    $('.modal').show();
    });

    $('.c_btn').click(function(){
      $('.modal').hide();
  });
});
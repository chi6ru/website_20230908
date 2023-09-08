<script>
// メニューの開閉
  $('.menu').on('click',function(){
    $('.menu__line').toggleClass('active');
    $('.gnav').fadeToggle();
  });
  $('.gnav a').on('click',function(){
    $('.menu__line').toggleClass('active');
    $('.gnav').fadeToggle();
  });
</script>
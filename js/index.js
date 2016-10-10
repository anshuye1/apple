$(function(){
    $('.nav-list li .search').on('click',function(){
        $('.nav-list').addClass('search1')
    })
    $('.nav-list li .bag').on('click',function(){
        $('.nav-list').removeClass('search1')
    });


    var slides = $('.banner-box a');
    var moving= false;//开关为关闭状态
      var moveTo=function(el,dir) {
          moving=true;//开关打开
          if(dir=="right"){
              moving=false;
              slides.filter('.active').removeClass('active').addClass('leave').delay(1000).queue(function(){
                  $(this).removeClass('leave').dequeue();
              })
              $(el).addClass('right');
              $(el).get(0).offsetWidth;
              $(el).removeClass('right').addClass('active');
          }else if(dir=="left"){
              slides.filter('.active').removeClass('active').addClass('enter').delay(1000).queue(function(){
                  moving=false;
                  $(this).removeClass('enter').dequeue();
              })
              $(el).addClass('left');
              $(el).get(0).offsetWidth;
              $(el).removeClass('left').addClass('active');
          }

          $('.ban-btn .bot div').removeClass('active').eq(slides.index(el)).addClass('active');
      }
    var moveRight=function(){
        if(moving){return;};
        var active=slides.filter('.active');
        var a=active.next().length?active.next():slides.eq(0);
        moveTo(a,'right')
    }
    var moveLeft=function(){
        if(moving){return;};
        var active=slides.filter('.active');
        var a=active.prev().length?active.prev():slides.eq(-1);
        moveTo(a,'left')
    }
    $('.ban-btn .bot').on('click',function(){
        clearInterval(t);
        var c=slides.index(slides.filter('.active'));
        var n=$(this).index();
        if(c==n)return;
        if(c<n){
            moveTo(slides.eq(n),"right")
        }
        if(c>n){
            moveTo(slides.eq(n),"left")
        }
    })
    var t=setInterval(moveRight,3000)
    $('.btn-left').on('click',function(){
         clearInterval(t);
        moveLeft()
    })
    $('.btn-right').on('click',function(){
        clearInterval(t);
        moveRight()
    })
    //小屏幕遮罩显示
    var flag=true;
    $('.er').on('click',function(){
        if(flag==true){
        $(this).addClass('er1');
        $('.bag').addClass('bag-out');
        $('.nr-list-small li').addClass('nr-li');
        $('.nr-list-small').addClass('nr-in');
        $('body').css('overflow','hidden');
            flag=false;
        }else{
            $('.nr-list-small').removeClass('nr-in');
            $(this).removeClass('er1');
            $('.bag').removeClass('bag-out');
            $('body').css('overflow','');
            $('.nr-list-small li').removeClass('nr-li');
            flag=true;
        }
    })

})
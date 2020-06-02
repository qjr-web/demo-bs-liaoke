$(function(){
  $(window).on("resize",function(){
    <!-- 获取窗口宽度 -->
    let clientW=$(window).width();
    <!-- console.log(clientW) -->
    <!-- 2设置临界值 -->
    let isShowBigImage=clientW >=800;
    <!-- 获取所有的item -->
    let $allItems=$("#lk_carousel .item")

    <!-- 遍历 -->
    $allItems.each(function(index,item){
      <!-- 获取所有图片的路径 -->
      let src=isShowBigImage ? $(item).data("lg-img") : $(item).data("sm-img")
      let imgUrl='url("'+ src +'" )'
      <!-- 设置背景 -->
      $(item).css({
        backgroundImage:imgUrl
      })
      <!-- 设置img标签 -->
      if(!isShowBigImage){
        let $img="<img src='"+ src +"'>"
        $(item).empty().append($img)
      }else{
        $(item).empty()
      }
    })
  });

  $(window).trigger("resize")

  <!-- 工具提示 -->
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  <!-- 动态处理宽度 -->
  $(window).on("resize",function(){
    let $ul=$("#lk_product .nav");
    let $allList=$("[role='presentation']",$ul);
    <!-- console.log($allList); -->
    <!-- 遍历 -->
    let totalW=0;
    $allList.each(function(index,item){
      totalW += $(item).width();
      <!-- console.log(totalW); -->
    })
    let parentW=$ul.parent().width();
    <!-- 设置宽度 -->
    if(totalW > parentW){
      $ul.css({
        width:totalW+"px"
      })      
    }else{
      $ul.removeAttr("style");
    }

  })

  <!-- 导航处理 -->
  allLis=$("#lk_nav li");
  $(allLis[0]).on("click",function(){
    $("html,body").animate({scrollTop:$("#lk_header").offset().top},1000)
  })
  $(allLis[1]).on("click",function(){
    $("html,body").animate({scrollTop: $("#lk_product").offset().top},1000)
  })
  $(allLis[2]).on("click",function(){
    $("html,body").animate({scrollTop: $("#lk_hot").offset().top},1000)
  })

    <!-- 通过trigger()方法为对象指定事件 -->
    $(window).trigger("resize")


})


var nowPage = 1;

$(function(){
    // move card
    $(".card-area .card").on("swipeleft",function(){
       movePage(1);
    });
    $(".card-area .card").on("swiperight",function(){
       movePage(0);
    });

    // open card
    $(".card-area .card").on("swipeup",function(){
        console.log("swipeup");
        console.log("nowPage",nowPage);
        $(".card-area .card:eq("+(nowPage-1)+")").addClass("active open");
        $("body").addClass("card-open");
    });
    // close card
    $(".card-area .card").on("swipedown",function(){
        console.log("swipedown");
        console.log("nowPage",nowPage);
        $(".card-area .card").removeClass("active");
        $(".card-area .card").removeClass("open");
        $("body").removeClass("card-open");
    });

    // click list
    $(".card .list").on("click","li",function(){
       $(this).toggleClass("check");
    });
});

function movePage(plus){
    if(plus){
        nowPage++;
        if(nowPage>3){
            nowPage = 3;
        }
    }else{
        nowPage--;
        if(nowPage<1){
            nowPage = 1;
        }
    }
    $("body").attr("class","page"+nowPage);
}

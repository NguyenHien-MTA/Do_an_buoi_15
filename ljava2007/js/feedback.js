$(document).ready(function(){
    // Hiệu ứng click hiện ra html
    $(".open-btt").on("click",function(){
        $(".open-btt").css("display","none")
       $(".close-btt").show()
        $(".input").css("display","block")
    })
    $(".close-btt").on("click",function(){
        $(".close-btt").css("display","none")
        $(".open-btt").show()
        $(".input").css("display","none")

    })
   
    //  Hiệu ứng khi rê chuột lên ngôi sao
 
    $("#s1").mouseenter(function(){
        $("#s1").css("color", "chocolate");
        $("#text").text("không thích").css("display","inline-block")
     });
     $("#s2").mouseenter(function(){
        $("#s1").css("color", "chocolate");
        $("#s2").css("color", "chocolate");
        $("#text").text("tạm được").css("display","inline-block")
        
     });
     $("#s3").mouseenter(function(){
        $("#s1").css("color", "chocolate");
        $("#s2").css("color", "chocolate");
        $("#s3").css("color", "chocolate");
        $("#text").text("Bình thường").css("display","inline-block")
     });
     $("#s4").mouseenter(function(){
        $("#s1").css("color", "chocolate");
        $("#s2").css("color", "chocolate");
        $("#s3").css("color", "chocolate");
        $("#s4").css("color", "chocolate");
        $("#text").text("tốt").css("display","inline-block")
     });
     $("#s5").mouseenter(function(){
        $("#s1").css("color", "chocolate");
        $("#s2").css("color", "chocolate");
        $("#s3").css("color", "chocolate");
        $("#s4").css("color", "chocolate");
        $("#s5").css("color", "chocolate");
        $("#text").text("Rất tuyệt vời").css("display","inline-block")
     });
    $(".star").mouseout(function(){
        $(".star").css("color","black")
        $("#text").css("display","none")
    })
    $(".star").on("click",function(){
        $(this).css("color","chocolate")
    })
    // đặt sự kiện onclick để cho ý kiến đánh giá
    $(".star").on("click",function(){
        $("star").css("color", "chocolate");
        $(".cmt").show()
    })
})
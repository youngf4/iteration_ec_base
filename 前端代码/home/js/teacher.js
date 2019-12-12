
// 鼠标悬停在教师头像上面的控制
$(".teacher_info").mouseover(function(){
    $(".teacher_info").css("animationPlayState","paused");
})

$(".teacher_info").mouseout(function(){
    $(".teacher_info").css("animationPlayState","running");
})

// 教师头像点击出现窗口
$(".link_teacher").click(function(){
    $("#light").css("display","block");
        $(".tabbar_window").eq(0).css("background-color","#868AA7");
        $(".information_tabpanel").css("display","block");
        $(".research_panel").css("display","none");
        $(".paper_panel").css("display","none");
    $("#fade").css("display","block");
})

$(".tabbar_window").click(function (){
    index = $(this).index();
    $(".tabbar_window").eq(index).css("background-color","#868AA7");
    $(".tabbar_window").eq(index).siblings().css("background-color","#63687B");
    $(".panel_teacher_window").eq(index).css("display","block");
    $(".panel_teacher_window").eq(index).siblings().css("display","none");  
    $("tabbar_panel_window").css("display","block");  
})

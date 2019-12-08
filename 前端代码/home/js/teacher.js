$(".teacher_info").mouseover(function(){
    $(".teacher_info").css("animationPlayState","paused");
})

$(".teacher_info").mouseout(function(){
    $(".teacher_info").css("animationPlayState","running");
})
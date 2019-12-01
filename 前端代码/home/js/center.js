// $(".tabbar").onclick = function() {alert("111")}
$(".tabbar").click(function() {
    index = $(this).index();
    $(".tabpanel").eq(index).css("display", "block");
    $(".tabpanel").eq(index).siblings().css("display","none")
    var height_str = $(".tabpanel").eq(index).css("height");
    var height = Number(height_str.slice(0,height_str.length-2))+175
    $(".footer").css("margin-top",height+'px')

});
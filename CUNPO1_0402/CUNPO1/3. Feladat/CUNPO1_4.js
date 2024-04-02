$(document).ready(function ()
{
    $("#hide1").click(function ()
    {
        $(".paragraph").hide();
    });

    $("#show1").click(function ()
    {
        $(".paragraph").show();
    });

    $("#hide1_show1").click(function ()
    {
        if ( $(".paragraph").is(":hidden") )
        {
            $(".paragraph").show();
        }else $(".paragraph").hide();
    });

    $("#transparency_btn1").click(function ()
    {
        $('#form_1').animate({opacity: 0.1}, 100);
    });

    $("#transparency_btn2").click(function ()
    {
        $('#form_1').animate({opacity: 0.5}, 100);
    });

    $("#transparency_btn3").click(function ()
    {
        $('#form_1').animate({opacity: 0.8}, 100);
    });

    $("#hide2").click(function ()
    {
        $("#form_1").hide();
    });

    $("#show2").click(function ()
    {
        $("#form_1").show();
    });

    $("#hide2_show2").click(function ()
    {
        if ( $("#form_1").is(":hidden") )
        {
            $("#form_1").show();
        }else $("#form_1").hide();
    });

    var lastY = 0;

    $("#header_1").mouseleave(function ()
    {
        alert("Elhúzott egér információ");
    });

    $("#click_text_1").click(function ()
    {
        $("p:first").hide();
    });

    $("#click_text_2").dblclick(function ()
    {
        $("p:nth-child(2)").hide();
    });

    $("#submit_btn_1").mouseenter(function ()
    {
        alert("Felé húzta az egeret");
    });

    $(document).on("mousemove", function (event)
    {
        var currentY = event.pageY;
        
        if ( currentY < lastY )
        {
            $(".submit_btn").css("border-color", "blue");
        }
        else
        {
            $(".submit_btn").css("border-color", "red");
        }

        lastY = currentY;
    });

    $("#form_1 input").focus(function ()
    {
        $(this).css("background-color", "gray");
    });

    $("#form_1 input").blur(function()
    {
        $(this).css("background-color", "white");
    });
});
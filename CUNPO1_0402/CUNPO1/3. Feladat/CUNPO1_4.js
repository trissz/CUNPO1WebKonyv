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
        $("#form_1").fadeTo(5000, 0.1);
    });

    $("#transparency_btn2").click(function ()
    {
        $("#form_1").fadeTo(5000, 0.5);
    });

    $("#transparency_btn3").click(function ()
    {
        $("#form_1").fadeTo(2000, 0.8);
    });

    $("#hide2").click(function ()
    {
        $('#form_1').fadeOut(5000);
    });

    $("#show2").click(function ()
    {
        $('#form_1').fadeIn(5000);
    });

    $("#hide2_show2").click(function ()
    {
        $('#form_1').fadeToggle(2000);
    });

    var lastY = 0;

    $("#header_1").mouseleave(function ()
    {
        alert("Elhúzott egér információ");
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
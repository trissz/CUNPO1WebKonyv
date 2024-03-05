$(document).ready(function ()
{
    var lastY = 0;

    $("#header_1").mouseleave(function ()
    {
        alert("Elhúzott egér információ")
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
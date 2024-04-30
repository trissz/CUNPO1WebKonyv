$(document).ready(function ()
{
    $(".func_btn").button();

    let state = true;

    $("#textapp_btn").click(function()
    {
        $("#text_area").html("Programtervező<br>informatikus");
        
        $("#box").animate(
        {
            backgroundColor: "#aa0000",
            color: "#fff",
            width: 300
        }, 1000);

        $("#box").animate(
        {
            backgroundColor: "#008000",
            color: "#000",
            width: 250
        }, 1000);
    });

    $("#box").click(function()
    {
        $("#text_area").html("Programtervező<br>informatikus");
        
        if ( state )
        {
            $("#box").animate(
            {
                backgroundColor: "#aa0000",
                color: "#fff",
                width: 300
            }, 1000);
        }
        else
        {
            $("#box").animate(
            {
                backgroundColor: "#008000",
                color: "#000",
                width: 250
            }, 1000);
        }

        state = !state;
    });

    $("#simple_btn").click(function()
    {
        $("#simple_btn").prepend("PTI-");
        $("#simple_btn").show().effect("highlight", 1000);
    });

    $("#newbtn_btn").click(function()
    {
        $("#btn_container").append('<button class="func_btn">THE-PTI</button>'); //Gombok után
        //$("#new_btn_container").append('<button class="func_btn">THE-PTI</button>'); //Forrás után
        $(".func_btn").button();
        $(".func_btn:last").show().effect("bounce", { times: 10 }, 1000);
    });

    $("#newheader_btn").click(function()
    {
        $("#header_1").html("jQuery feladatok");
        $("#header_1").show().effect("slide", 1000);
    });

    $("#newfooter_btn").click(function()
    {
        if ( $("#header_1").html() != "" )
        {
            $("#header_2").html("HTML metódusok");
            $("#header_2").show().effect("slide", 1000);
        }
    });

    $("#newformheader_btn").click(function()
    {
        $("#form_").prepend("<h2 id='form_header'>ŰRLAP_CUNPO1</h2>");
        $("#form_header").show().effect("pulsate", 1000);
    });
});
$(document).ready(function ()
{
    $("#textapp_btn").click(function()
    {
        $("#text_area").html("Programtervező informatikus");
    });

    $("#simple_btn").click(function()
    {
        $("#simple_btn").prepend("PTI-");
    });

    $("#newbtn_btn").click(function()
    {
        $("#btn_container").append('<button class="func_btn" id="new_btn">THE-PTI</button>'); //Gombok után
        //$("#new_btn_container").append('<button class="func_btn" id="new_btn">MEGEIK-PTI</button>'); //Forrás után
    });

    $("#newheader_btn").click(function()
    {
        $("#header_1").html("jQuery feladatok");
    });

    $("#newfooter_btn").click(function()
    {
        if ( $("#header_1").html() != "" )
        {
            $("#header_2").html("HTML metódusok");
        }
    });

    $("#newformheader_btn").click(function()
    {
        $("#form_").prepend("<h2>ŰRLAP_CUNPO1</h2>");
    });
});
$(document).ready(function ()
{
    $("#K1").click(function ()
    {
        $("#list_1 li:first-child").hide();
        $("#list_2 li:first-child").hide();
        $("a[name='link_the']").hide();
    });

    $("#K2").click(function ()
    {
        $("#list_1 li:first-child").hide();
        $("#list_2 li:first-child").hide();
        $("a[name='link_the']").hide();
        $("#K2").hide();
    });

    $("#K3").click(function ()
    {
        $("#header_1").hide();
        $("#list_1 li:first-child").hide();
        $("#list_2 li:first-child").hide();
        $("a[name='link_the']").hide();
    });

    $("#K4").click(function ()
    {
        $("#list_1 li:first-child").hide();
        $("#list_2 li:first-child").hide();
        $("#link_label").hide();
        $("a[name='link_the']").hide();
    });

    $("#K5").click(function ()
    {
        $("#list_1 li:first-child").hide();
        $("#list_2 li:first-child").hide();
        $("a[name='link_the']").hide();
        $("#table_1 tr:nth-child(even)").hide();
    });

    $("#show_btn").click(function()
    {
        $("#header_1").show();
        $("#list_1 li:first-child").show();
        $("#list_2 li:first-child").show();
        $("#link_1").show();
        $("a[name='link_the']").show();
        $("#K2").show();
        $("#table_1 tr:nth-child(even)").show();
    });
});
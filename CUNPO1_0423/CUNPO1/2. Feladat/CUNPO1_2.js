$(document).ready(function ()
{
    $("#deletebox_btn").click(function()
    {
        $("#box").remove();
    });

    $("#emptydivelements_btn").click(function()
    {
        $("#box").empty();
    });
});
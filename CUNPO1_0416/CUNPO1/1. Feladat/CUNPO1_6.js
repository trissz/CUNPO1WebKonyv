$(document).ready(function ()
{
    $("#text_btn").click(function()
    {
        alert("HTML kód...");
        $("#text_area").html("HTML kód...");
    });

    $("#code_btn").click(function()
    {
        alert(document.documentElement.outerHTML);
        $("#text_area").css({"white-space": "pre-wrap"});
        $("#text_area").text(document.documentElement.outerHTML);
    });

    $("#val_btn").click(function()
    {
        alert($("input[name=name]").val());
        $("#text_area").html($("input[name=name]").val());
    });

    $("#param_btn").click(function()
    {
        //alert($("#source_").text());
        //$("#text_area").html($("#source_").text());

        //let param = prompt("Terület: ");
        //alert("A megadott terület: " + param);
        //$("#text_area").html(param);

        let id = prompt("ID: ");
        alert("A megadott ID: " + id);
        $("#text_area").html(id);
    });
});
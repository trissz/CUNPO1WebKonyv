$(document).ready(function ()
{
    $("#load_data").click(function()
    {
        $("#area").html("");

        $("#area").append("<h3>Tokaj Hegyalja Egyetem</h3>");

        $.getJSON("CUNPO1_orarendobject.json", function(data)
        {
            $("#area").append("<b>Cím:</b>");
            $("#area").append("&nbsp;" + data.cim["iranyitoszam"]);
            $("#area").append("&nbsp;" + data.cim["varos"]);
            $("#area").append("&nbsp;" + data.cim["utca"] + "<br><br>");

            $("#area").append("<b>Telefonszám:</b><br><ul>");

            for ( let i = 0; i < data["telefonszam"].length; i ++ )
            {
                $("#area").append("<li>" + data["telefonszam"][i].tipus + ":&nbsp;" + data["telefonszam"][i].szam + "</li>");
            }

            $("#area").append("</ul><br><b>Órarend -2024 tavasz</b><br><br>");
            
            $("#area").append("<b>Tárgy:</b>&nbsp;" + data.ora.targy + "<br><br>");
            $("#area").append("<b>Időpont:</b><br>&nbsp;Nap:&nbsp;" + data.ora.idopont.nap + "<br>&nbsp;Tól:&nbsp;" + data.ora.idopont.tol + "<br>&nbsp;Ig:&nbsp;" + data.ora.idopont.ig + "<br><br>");
            $("#area").append("<b>Helyszín:</b>&nbsp;" + data.ora.helyszin + "<br><br>");
            $("#area").append("<b>Oktató:</b>&nbsp;" + data.ora.oktato + "<br><br>");
            $("#area").append("<b>Szak:</b>&nbsp;" + data.ora.szak + "<br><br>");
            $("#area").append("<b>Típus:</b>&nbsp;" + data.ora.tipus);
        });
    });
});
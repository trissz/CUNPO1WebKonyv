$(document).ready(function ()
{
    $("#load_data").click(function()
    {
        $.ajax({
            dataType: "json",
            url: "CUNPO1_orarend_teljes.json",
            success: function(data)
            {
                let out = "";
        
                for ( let i = 0; i < data.ora.length; i ++ )
                {
                    let item = data.ora[i];
                    
                    Object.keys(item).forEach(function (key)
                    {
                        let keyOut = key.charAt(0).toUpperCase() + key.slice(1);
                        out += "<strong>" + keyOut + "</strong>:&nbsp;";

                        if ( key == "idopont" )
                        {
                            out += "<br>";

                            Object.keys(item[key]).forEach(function (itemDate)
                            {
                                let keyDateOut = itemDate.charAt(0).toUpperCase() + itemDate.slice(1);
                                out += "&nbsp;<strong>" + keyDateOut + "</strong>:&nbsp;" + item[key][itemDate] + "<br>";
                            });
                        }else out += item[key] + "<br>";
                    });

                    out += "<hr>";
                }

                $("#area").html(out);
            },
            error: function (xhr, status, error)
            {
                console.error("Probléma a JSON file betöltésével: " + error);
            }
        });
    });
});
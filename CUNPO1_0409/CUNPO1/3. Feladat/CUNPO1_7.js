$(document).ready(function ()
{
    $("#load_data").click(function()
    {
        $.ajax({
            dataType: "json",
            url: "CUNPO1_orarend.json",
            success: function(data)
            {
                let out = "";
        
                $.each(data, function(key1, val1)
                {
                    $.each(val1, function(key2, val2)
                    {
                        if ( key2 == "idopont" )
                        {
                            let key2Out = key2.charAt(0).toUpperCase() + key2.slice(1);
                            out += "<strong>" + key2Out + "</strong>:<br>";

                            $.each(val2, function(key3, val3)
                            {
                                let key3Out = key3.charAt(0).toUpperCase() + key3.slice(1);
                                out += "&nbsp;&nbsp;<strong>" + key3Out + "</strong>:&nbsp;" + val3 + "<br>";
                            });
                        }
                        else
                        {
                            let key2Out = key2.charAt(0).toUpperCase() + key2.slice(1);
                            out += "<strong>" + key2Out + "</strong>:&nbsp;" + val2 + "<br>";
                        }
                    });
                });

                $("#area").html(out);
            },
            error: function (xhr, status, error)
            {
                console.error("Probléma a JSON file betöltésével: " + error);
            }
        });
    });
});
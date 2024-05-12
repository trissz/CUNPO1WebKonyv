let algorithm_list;
let table_content;

$(document).ready(function()
{
    $.getJSON("/json/algorithm_data.json", function(data)
    {
        algorithm_list = data.algorithms;

        let titles = ["Elnevezés", "Kategória", "Rövid leírás", "Futás komplexitás"];
        let title_colors = ["#FCD029", "#F26419", "#44C1C5", "#1b4E4F"];

        table_content = "<tr>";

        for ( let i = 0; i < titles.length; i ++ )
        {
            table_content += `<th style="background-color:${title_colors[i]};">${titles[i]}</th>`;
        }

        table_content += "</tr>";

        for ( let i = 0; i < algorithm_list.length; i ++ )
        {
            table_content += "<tr>";

            for ( let key in algorithm_list[i] )
            {
                if ( key == "name" || key == "category" || key == "description" )
                {
                    table_content += `<td>${algorithm_list[i][key]}</td>`;
                }

                if ( key == "runtime" )
                {
                    table_content += `<td style="text-align: center;">${algorithm_list[i][key]}</td>`;
                }
            }

            table_content += "</tr>";
        }
    }).done(function()
    {
        $("#algorithm_table").append(table_content);
        $("#algorithm_table").show("drop", 2000);
    })
    .fail(function()
    {
        $("#algorithm_table").append("<tr><td>Nem sikerült betölteni az adatokat.......</td></tr>");
    })
    .always(function()
    {
        
    });
});
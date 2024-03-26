$(document).ready(function ()
{
    $.getJSON('CUNPO1_konyv.json', function(data)
    {
        $.each(data.konyvek.konyv, function(i, param)
        {
            let tableRow = "<tr>" +
                "<td>" + param.szerzo + "</td>" +
                "<td>" + param.cim + "</td>" +
                "<td>" + param.kiadas_eve + "</td>" +
                "<td>" + param.kategoria + "</td>" +
                "<td>" + param.nyelv + "</td>" +
                "</tr>";

            $("#book_data tbody").append(tableRow);
        });
    });
});
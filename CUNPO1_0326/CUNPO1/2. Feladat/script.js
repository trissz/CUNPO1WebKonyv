function showBooks()
{
    let tableBody = '<tr>';

    for ( let i = 0; i < CUNPO1.konyvek.length; i ++ )
    {
        tableBody += '<td><table class=\"inner_table\"><tr><td>Name</td><td>' + CUNPO1.konyvek[i].name + '</td><tr><td>Price</td><td>' + CUNPO1.konyvek[i].price + '</td></tr></table></td>';
    }

    tableBody += '</tr>';

    document.getElementById("book_data").getElementsByTagName('tbody')[0].innerHTML = tableBody;
}

const CUNPO1 =
{
    "konyvek":
    [
        {
            "name": "Java XML and JSON",
            "price": 0,
            "topic": "Informatics",
            "type": "JSON",
            '_id': 0
        },
        {
            "name": "JavaScript to JSON",
            "price": 20,
            "topic": "Informatics",
            "type": "JSON",
            '_id': 1
        },
        {
            "name": "Scala for the Impatient",
            "price": 1000,
            "topic": "Informatics",
            "type": "Scala",
            '_id': 2
        },
        {
            "name": "Scala in Depth",
            "price": 1300,
            "topic": "Informatics",
            "type": "Scala",
            '_id': 3
        }
    ]
}

$(document).ready(function ()
{
    showBooks();
});
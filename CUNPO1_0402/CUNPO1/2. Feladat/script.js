const BTObj =
{
    "name": "Bárdos Triszten",
    "age": 22,
    "cars":
    [
        {"name": "Toyota", "models": ["CHR", "Corolla", "Proace"]},
        {"name": "Ford", "models": ["Kuga", "Mondeo", "Mustang"]},
        {"name": "BMW", "models": ["320", "X3", "X5"]},
        {"name": "Fiat", "models": ["500", "Panda", "Tipo"]}
    ]
};

document.addEventListener("DOMContentLoaded", function() 
{
    let out = '';

    for ( let i = 0; i < BTObj.cars.length; i ++ )
    {
        out += '<tr>';

        for ( let j = 0; j < BTObj.cars[i].models.length; j ++ )
        {
            out += '<td class="car_list_element">' + BTObj.cars[i].models[j] + '</td>';
        }

        out += '</tr>';
    }

    document.getElementById("output_container").innerHTML = out;
});
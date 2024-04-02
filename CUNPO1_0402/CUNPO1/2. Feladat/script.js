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
        out += '<li><h2>' + BTObj.cars[i]['name'] + '</h2></li><ul>';

        for ( let j = 0; j < BTObj.cars[i].models.length; j ++ )
        {
            out += '<li><h3>' + BTObj.cars[i].models[j] + '</h3></li>';
        }

        out += '</ul>';
    }

    document.getElementById("output_container").innerHTML = out;
});
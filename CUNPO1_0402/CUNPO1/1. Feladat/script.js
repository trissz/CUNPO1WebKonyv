document.addEventListener("DOMContentLoaded", function() 
{
    let BTObj, X;

    BTObj =
    {
        "name": "Kiss István",
        "age": 20,
        "cars":
        [
            "Ford",
            "BMW",
            "Fiat"
        ]
    };

    X = BTObj.cars[1];

    document.getElementById("output").innerHTML = X;
});
function jsonToText(dataObject)
{
    let text = JSON.stringify(dataObject, null, 2);

    return text;
}

function textToJson(JSONText)
{
    let object = JSON.parse(JSONText);

    return object;
}

function init()
{
    let JSONText = jsonToText(dataObject);
    document.getElementById("json_text").innerHTML = JSONText;
    document.getElementById("json_object").innerHTML = textToJson(JSONText);
}

const dataObject =
{
    "data":
    [
        {
            "nev": "Példa név1",
            "iranyitoszam": 1234,
            "varos": "Példa város1",
            "egyetem": "Példa egyetem1",
            "_id": 0
        },
        {
            "nev": "Példa név2",
            "iranyitoszam": 2345,
            "varos": "Példa város2",
            "egyetem": "Példa egyetem2",
            "_id": 1
        },
        {
            "nev": "Példa név3",
            "iranyitoszam": 3456,
            "varos": "Példa város3",
            "egyetem": "Példa egyetem3",
            "_id": 2
        },
        {
            "nev": "Példa név4",
            "iranyitoszam": 4567,
            "varos": "Példa város4",
            "egyetem": "Példa egyetem4",
            "_id": 3
        },
        {
            "nev": "Példa név5",
            "iranyitoszam": 5678,
            "varos": "Példa város5",
            "egyetem": "Példa egyetem5",
            "_id": 4
        }
    ]
}
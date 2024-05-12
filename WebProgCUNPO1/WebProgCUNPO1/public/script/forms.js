$(document).ready(function()
{
    $("#useful").checkboxradio();
    $("#not_useful").checkboxradio();
    $("#age").datepicker();
    
    $(function()
    {
        $("#favcolor").colorpicker();
    });

    fetchAlgorithms().then(function()
    {
        initializeAlgorithmsForDatalist();
    });

    $("#send_btn_forms").click(function()
    {
        checkFormFields();
    });
});

function initializeAlgorithmsForDatalist()
{
    for ( let i = 0; i < algorithms.length; i ++ )
    {
        $("#datalist_forms").append(`<option value="${algorithms[i].name}">${algorithms[i].name}</option>`);
    }
}

function checkFormFields()
{
    let formElements = document.querySelectorAll('input[type="text"], input[type="email"], input[type="radio"], input[type="textarea"], select');
    let field_counter = 1;
    let isValid = true;

    $("#message_container_forms").html("");

    formElements.forEach(function(field_element)
    {
        if ( field_element.type === 'email' )
        {
            if ( field_element.value.trim() === '' || !isValidEmail(field_element.value) )
            {
                $("#message_container_forms").append("Az email cím mező üres vagy helytelen.<br>");
                field_element.classList.add('invalid_forms_field');
                isValid = false;
            }
            else
            {
                field_element.classList.remove('invalid_forms_field');
            }
        }
        else
        {
            if ( field_element.value.trim() == '' )
            {
                $("#message_container_forms").append("A(z) " + field_counter + ". mező üres.<br>");
                field_element.classList.add('invalid_forms_field');
                isValid = false;
            }
            else
            {
                field_element.classList.remove('invalid_forms_field');
            }
        }

        field_counter ++;
    });

    $("#message_container_forms").show();

    if ( isValid )
    {
        $("#message_container_forms").css("color", "green");
        $("#message_container_forms").html("Sikeres kitöltés !");
    }
    else
    {
        $("#message_container_forms").css("color", "red");
    }
}

function isValidEmail(email)
{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
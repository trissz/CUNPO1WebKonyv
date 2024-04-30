$(document).ready(function ()
{
    $(".widget button").button();

    $("input[type='radio']").checkboxradio();

    $("#calc").click(function(event)
    {
        event.preventDefault();

        let a = Number($("#a_in").val());
        let b = Number($("#b_in").val());
        let c = null;

        if ( $("#a_times_b").prop("checked") )
        {
            c = a * b;
        }

        if ( $("#a_dividedby_b").prop("checked") )
        {
            c = a / b;
        }

        if ( $("#a_plus_b").prop("checked") )
        {
            c = a + b;
        }

        if ( $("#a_minus_b").prop("checked") )
        {
            c = a - b;
        }

        if ( c != null )
        {
            $("#result").html(c);
        }
    });
});
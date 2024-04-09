$(document).ready(function ()
{
    let animation_in_process = false;

    $("#animate_btn").click(function()
    {
        if ( !animation_in_process )
        {
            animation_in_process = true;

            $("#box").animate(
            {
                marginLeft: '200px',
                width: '+=150px',
                fontSize: '30pt'
            }, 2000, function()
            {
                var newHeight = $("#box").height() * 1.1;
    
                $("#box").animate(
                {
                    marginTop: '200px',
                    width: '-=250px',
                    fontSize: '2.5em',
                    height: newHeight
                }, 2000, function()
                {
                    $("#box").animate(
                    {
                        marginLeft: '0px',
                        opacity: '0.4'
                    }, 2000, function()
                    {
                        $("#box").animate(
                        {
                            marginTop: '0px',
                            opacity: '1',
                            fontSize: '12pt',
                            width: '300px',
                            height: '100px'
                        }, 2000, function()
                        {
                            alert("VÉGE");
                            animation_in_process = false;
                        });
                    });
                });
            });
        }
    });

    $("#hidep_btn").click(function()
    {
        var alert_made = false;

        $(".paragraph").animate(
        {
            height: '0px',
            opacity: '0',
            marginBottom: '0px'
        }, 2000, function()
        {
            if ( !alert_made )
            {
                alert("Bekezdések elrejtése");
                alert_made = true;
            }
        });

        //alert_made = false;
    });

    $("#close_open_btn").click(function()
    {
        var originalHeight = $("#box").height();

        $("#box").animate(
        {
            height: '0px'
        }, 2000, function()
        {
            $("#box").animate(
            {
                height: originalHeight
            }, 2000, function()
            {
                $("#box").animate(
                {
                    marginLeft: '300px',
                }, 2000);
            });
        });
    });
});
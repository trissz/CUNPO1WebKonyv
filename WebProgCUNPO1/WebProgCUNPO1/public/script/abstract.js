let algorithms;
let current_algorithm;
let specificAlgorithmId = null;
let toggle_in_process = false;

async function fetchAlgorithms()
{
    const response = await fetch('/json/algorithm_data.json');
    const data = await response.json();
    return data.algorithms;
}

$(document).ready(function()
{
    fetchAlgorithms().then((result) =>
    {
        algorithms = result;

        for ( let i = 0; i < algorithms.length; i ++ )
        {
            $(".submenu_items").append(`<li><a href="/html/algorithms.html?id=${algorithms[i].id}">${algorithms[i].name}</a></li>`);
        }
    });

    const animation_duration = 400;
    let scale_ = 1;

    $(document).tooltip();

    $(".header img_container img").attr("title", "Vissza a kezdőlapra");

    $(".submenu").find(".submenu_items").hide();

    $(".submenu").mouseleave(function()
    {
        $(this).find(".submenu_items").hide();
    });

    let nav_margin_top = $("header").outerHeight();

    if ( document.title == "Kezdőlap" )
    {
        nav_margin_top = 0;
    }

    let float_percentage = 12.5;

    $("main").css("margin-top", $("nav").outerHeight());
    $(".menubar>ul:first-child").css("margin-top", nav_margin_top);
    $(".menubar>ul:last-child").css("margin-bottom", $("footer").outerHeight());
    $(".submenu").css("top", "0");

    $(".submenu").on("click mouseenter", function() 
    {
        if ( !toggle_in_process )
        {
            var parentOffset = $(this).offset();
            var parentWidth = $(this).outerWidth();
            var posX = parentOffset.left + parentWidth;

            $(this).find(".submenu_items").css(
            {
                "position": "absolute",
                "left": posX,
                "display": "none",
                "background-color": "#333",
                "color": "white",
                "top": nav_margin_top
            }).animate(
            {
                "left": posX,
                "opacity": "toggle"
            }, 300);

            $(this).find(".submenu_items").show();
        }
    });

    $(".toggle_nav_btn").click(function()
    {
        if ( !toggle_in_process )
        {
            toggle_in_process = true;

            $(".toggle_nav_btn>.toggle_nav_text").animate(
            {
                scaleX: -1 * scale_
            },
            {
                duration: animation_duration,
                step: function(now)
                {
                    $(this).css('transform', `scaleX(${now})`);
                }
            });

            $(".toggle_nav_btn").animate(
            {
                left: scale_ == 1 ? "0" : `-${float_percentage}%`
            }, {
                duration: animation_duration,
                easing: "linear"
            });

            $(".menubar").animate(
            {
                left: scale_ == 1 ? "0" : `-${float_percentage + 0.1}%`
            }, {
                duration: animation_duration - 300,
                easing: "linear",
                complete: function()
                {
                    $(".toggle_nav_btn").css("background-color", "#333");
                    toggle_in_process = false;
                }
            });

            scale_ *= -1;
        }
    });
});

function toggleTheme()
{
    const body = document.body;
    const themeToggle = document.querySelector('.theme_switch img');

    if ( body.classList.contains('dark-mode') )
    {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeToggle.src = '/images/dark_mode.png';
    }
    else
    {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeToggle.src = '/images/light_mode.png';
    }
}
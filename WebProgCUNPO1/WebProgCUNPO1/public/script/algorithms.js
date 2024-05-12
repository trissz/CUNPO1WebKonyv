$(document).ready(function()
{
    let urlParams = new URLSearchParams(window.location.search);
    let specificAlgorithmId = urlParams.get('id');

    fetchAlgorithms().then(function()
    {

        if ( specificAlgorithmId )
        {
            displayAlgorithm(specificAlgorithmId);
        }
        else initializeAlgorithms();
    });
});

function initializeAlgorithms()
{
    let containerReference = document.getElementById("grid_container_algorithms");

    for ( let i = 0; i < algorithms.length; i ++ )
    {
        containerReference.innerHTML +=
            `<div class="algorithm_widget">
                <h2>${algorithms[i].name}</h2>
                <div class="algorithm_category">${algorithms[i].category}</div>
                <div class="algorithm_description">${algorithms[i].description}</div>
                <button onclick="displayAlgorithm(${algorithms[i].id});">Megtekintés</button>
            </div>`;
    }
}

function displayAlgorithm(id)
{
    $("#main_content_algorithms").html("");

    current_algorithm = algorithms.find(algorithm => algorithm.id == id);
    
    $("#main_content_algorithms").append("<div class='go_back_container'><a href='/html/algorithms.html'>&#129032;</a></div>");
    $("#main_content_algorithms").append(`<div class="topaz_header">${current_algorithm.name}</div>`);
    $("#main_content_algorithms").append(`<div class="description_container">${current_algorithm.detailed_information}</div>`);
    $("#main_content_algorithms").append(`<div class="toggle_code_visibility_btn_container"><button class="toggle_code_visibility_btn" onclick="showCode()"><img title="Kód megtekintése" src="/images/show.png"></button></div>`);
    $("#main_content_algorithms").append(`<div class='code_container'><button class="copy_code_btn" onclick="copyCodeToClipboard()" hidden>Copy code</button><pre>${highlightCodeForCPP(current_algorithm.code)}</pre></div>`);
    //$("#main_content_algorithms").append(`<div class='code_container' hidden><pre>${highlightCodeForCPP(current_algorithm.code)}</pre></div>`);

    let multimedia_controller_content = initializeMultimediaControllerContent();

    $("#main_content_algorithms").append(`<h1 style="text-align: center;">Kapcsolódó médiatartalom</h1><div class="multimedia_container"><video id="video_${current_algorithm.id}" controls><source src="/multimedia/algorithm_${current_algorithm.id}_multimedia.mp4" type="video/mp4">A videó nem támogatott.</video><div class="multimedia_controller">${multimedia_controller_content}</div></div>`);
    
    initializeVideo();
}

function showCode()
{
    $(".code_container").css("overflow-x", "auto");
    $(".code_container").css("overflow-y", "auto");
    $(".toggle_code_visibility_btn").attr("onclick", "hideCode()");
    $(".code_container").css("filter", "blur(0)");
    //$(".code_container").show();
    $(".toggle_code_visibility_btn img").attr("title", "Kód elrejtése");
    $(".toggle_code_visibility_btn img").attr("src", "/images/hide.png");
    $(".code_container").css("user-select", "auto");
    $(".copy_code_btn").show();
}

function hideCode()
{
    $(".code_container").css("overflow-x", "hidden");
    $(".code_container").css("overflow-y", "hidden");
    $(".toggle_code_visibility_btn").attr("onclick", "showCode()");
    $(".code_container").css("filter", "blur(0.2rem)");
    //$(".code_container").hide();
    $(".toggle_code_visibility_btn img").attr("title", "Kód megtekintése");
    $(".toggle_code_visibility_btn img").attr("src", "/images/show.png");
    $(".code_container").css("user-select", "none");
    $(".copy_code_btn").hide();
}

function copyCodeToClipboard()
{
    navigator.clipboard.writeText(current_algorithm.code).then(function()
    {
        $(".copy_code_btn").after("<div id='code_copy_dialog' title='Kód másolása'>A kód másolása sikeres !</div>");
        $("#code_copy_dialog").dialog();

        setTimeout(function()
        {
            $("#code_copy_dialog").remove();
        }, 2000);
    }).catch(function(error)
    {
        $(".copy_code_btn").after("<div id='code_copy_dialog' title='Kód másolása'>A kód másolása sikertelen. . .</div>");
        $("#code_copy_dialog").dialog();
    });
}

function highlightCodeForCPP(codeSnippet)
{
    codeSnippet = codeSnippet.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    codeSnippet = codeSnippet.replace(/\b(for|while|do|struct|class|public|private|protected|void|goto|signed|unsigned|malloc|sizeof|if|else|switch|break|return)\b/g, "<span class='code_flow'>$&</span>");
    codeSnippet = codeSnippet.replace(/^#.*$/gm, "<span class='code_def'>$&</span>");
    codeSnippet = codeSnippet.replace(/\b(using|namespace|int|char|long|double|float)\b/g, "<span class='code_types'>$&</span>");
    codeSnippet = codeSnippet.replace(/\b(std|cout|endl|cin|stringstream|fstream|ifstream|ofstream)\b/g, "<span class='code_streams'>$&</span>");
    codeSnippet = codeSnippet.replace(/\b(vector|set|map|queue|stack|list)\b/g, "<span class='code_structures'>$&</span>");
    codeSnippet = codeSnippet.replace(/\b(push_back|pop_back|push|pop|remove|erase|max|min|length|size|clear|empty|replace|substr)\b/g, "<span class='code_structure_functions'>$&</span>");
    codeSnippet = codeSnippet.replace(/\/\/.*/g, "<span class='code_comment'>$&</span>");
    codeSnippet = codeSnippet.replace(/"[^"]*"/g, "<span class='code_string'>$&</span>");
    codeSnippet = codeSnippet.replace(/\b\d+\b/g, "<span class='code_number'>$&</span>");

    return codeSnippet;
}

function initializeMultimediaControllerContent()
{
    return (
        `
            <button class="start_pause" onclick="togglePlayPause();">Lejátszás/leállítás</button>
            <button class="restart_video" onclick="restartVideo();">Lejátszás az elejétől</button>
            <button class="full_screen" onclick="toggleFullScreen();">Teljes képernyő</button>
            <div class="volume_settings">
                <div class="volume_label">Hangerő</div>
                    <div class="volume_btn_container">
                        <button class="volume_down" onclick="volumeDown();">-</button>
                        <button class="volume_up" onclick="volumeUp();">+</button>
                    </div>
                <button class="mute_btn" id="mute_btn_${current_algorithm.id}" onclick="muteUnmuteVideo();">🔈</button>
            </div>
            <div class="speed_settings">
                <div class="speed_change_label">Lejátszási sebesség</div>
                <div class="speed_btn_container">
                    <button class="speed_down_btn" onclick="speedDown();">«</button>
                    <button class="speed_up_btn" onclick="speedUp();">»</button>
                </div>
                <button class="set_default_speed_btn" onclick="setSpeedDefault();">Alaphelyzetbe állítás</button>
            </div>
        `
    );
}
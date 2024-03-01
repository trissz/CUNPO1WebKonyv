let video;

function init()
{
    video = document.getElementById('video_');
}

function togglePlayPause()
{
    if ( video )
    {
        if ( video.paused )
        {
            video.play();
        }
        else
        {
            video.pause();
        }
    }
}

function toggleFullScreen()
{
    if ( video )
    {
        if ( !document.fullscreenElement )
        {
            video.requestFullscreen();
        }
        else
        {
            if ( document.exitFullscreen )
            {
                document.exitFullscreen();
            }
        }
    }
}

function restartVideo()
{
    if ( video )
    {
        video.currentTime = 0;
        video.play();
    }
}

function volumeUp()
{
    if ( video )
    {
        video.volume += 0.1;
    }
}

function volumeDown()
{
    if ( video )
    {
        if ( video.volume - 0.1 == 0 ) document.getElementById('mute_btn').innerHTML = '&#128264';
        video.volume -= 0.1;
    }
}

function speedUp()
{
    if ( video )
    {
        video.playbackRate += 0.1;
    }
}

function speedDown()
{
    if ( video )
    {
        video.playbackRate -= 0.1;
    }
}

function setSpeedDefault()
{
    if ( video )
    {
        video.playbackRate = 1;
    }
}

function muteUnmuteVideo()
{
    if ( video )
    {
        if ( video.volume == 0 )
        {
            document.getElementById('mute_btn').innerHTML = '&#128264';

            if ( video )
            {
                video.volume = 0.5;
            }
        }
        else
        {
            document.getElementById('mute_btn').innerHTML = '&#128263';

            if ( video )
            {
                video.volume = 0;
            }
        }
    }
}

function clearOutputSection()
{
    document.getElementById('info_output_container').style.backgroundColor = '';
    document.getElementById('info_output_container').style.border = '';
    document.getElementById('info_output_container').innerHTML = '';
}

function showIsEndBox()
{
    if ( video )
    {
        document.getElementById('info_output_container').style.backgroundColor = 'beige';
        document.getElementById('info_output_container').style.border = '0.2em solid black';
        video.currentTime == video.duration ?
            document.getElementById('info_output_container').innerHTML = "Vége a videónak." :
            document.getElementById('info_output_container').innerHTML = "A videónak még nincs vége.";

        document.getElementById('info_output_container').innerHTML += '<button class="ok_btn" onclick="clearOutputSection();">OK</button>';
    }
}

function showLengthBox()
{
    if ( video )
    {
        document.getElementById('info_output_container').style.backgroundColor = 'beige';
        document.getElementById('info_output_container').style.border = '0.2em solid black';
        document.getElementById('info_output_container').innerHTML = "A videó hossza (mp): " + video.duration + '<button class="ok_btn" onclick="clearOutputSection();">OK</button>';
    }
}

function showActualPositionBox()
{
    if ( video )
    {
        document.getElementById('info_output_container').style.backgroundColor = 'beige';
        document.getElementById('info_output_container').style.border = '0.2em solid black';
        document.getElementById('info_output_container').innerHTML = "A videó jelenlegi pozíciója (mp): " + video.currentTime + '<button class="ok_btn" onclick="clearOutputSection();">OK</button>';
    }
}
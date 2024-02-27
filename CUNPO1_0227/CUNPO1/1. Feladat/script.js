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
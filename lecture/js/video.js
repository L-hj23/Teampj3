$(document).ready(function() {
    const $video = $('#lectureVideo');
    const $currentTimeText = $('#currentTimeText');

    $video.on('timeupdate', function() {
        const currentTime = Math.floor($video[0].currentTime);
        $currentTimeText.text(`현재 재생 시간: ${currentTime}초`);
    });
});
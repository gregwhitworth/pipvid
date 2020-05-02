function addVideoEls() {
    let videoEls = document.querySelectorAll('video');

    let pipButton = document.createElement('button');
    pipButton.setAttribute('class', 'pipvid');
    let img = document.createElement('img');
    img.src = chrome.runtime.getURL('icon.png');
    pipButton.append(img);

    let vcount = 0;
    videoEls.forEach((video) => {
        vcount++;
        video.setAttribute('data-pipvid-id', `pv-${vcount}`);
        pipButton.setAttribute('data-pipvid', `pv-${vcount}`);
        video.parentNode.prepend(pipButton);
    });
    triggerPip();
}

function triggerPip() {
    let pipButtons = document.querySelectorAll('.pipvid');
pipButtons.forEach((el) => {
        el.addEventListener('click', () => {
            let pipVidId = el.getAttribute('data-pipvid');
            let selector = `[data-pipvid-id=${pipVidId}]`;
            let vid = document.querySelector(selector);
            vid.requestPictureInPicture();
        });
    });
}

addVideoEls();
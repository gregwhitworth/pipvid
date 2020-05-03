function addVideoEls() {
    let videoEls = document.querySelectorAll('video');

    let pipButton = document.createElement('button');
    pipButton.setAttribute('class', 'pipvid pipvid-pip');
    pipButton.setAttribute('title', 'Make video picture in picture');
    pipButton.setAttribute('data-pipvid-action', 'pip');
    let pipImage = document.createElement('img');
    pipImage.src = chrome.runtime.getURL('icon.png');
    pipButton.append(pipImage);

    let pipVidControls = document.createElement('div');
    pipVidControls.setAttribute('class', 'pipvid-controls');
    pipVidControls.append(pipButton);

    let vcount = 0;
    videoEls.forEach((video) => {
        vcount++;
        video.setAttribute('data-pipvid-id', `pv-${vcount}`);
        pipButton.setAttribute('data-pipvid', `pv-${vcount}`);
        video.parentNode.prepend(pipVidControls);
    });
    triggerActions();
}

function triggerActions() {
    let pipButtons = document.querySelectorAll('.pipvid');
pipButtons.forEach((el) => {
        el.addEventListener('click', () => {
            let pipVidId = el.getAttribute('data-pipvid');
            let pipVidAction = el.getAttribute('data-pipvid-action');
            let selector = `[data-pipvid-id=${pipVidId}]`;
            let vid = document.querySelector(selector);

            if (pipVidAction == "pip") {
                triggerPip(vid);
                return;
            }

            return;
        });
    });
}

function cleanSlate() {
    let pipvidControls = document.querySelectorAll('.pipvid-controls');
    pipvidControls.forEach((el) => el.parentNode.removeChild(el));
}

function triggerPip(vid) {
    if (vid) {
        if (document.pictureInPictureElement) {
            document.exitPictureInPicture();
        }
        vid.requestPictureInPicture();
    }
}

cleanSlate();
addVideoEls();
const video = document.getElementById('video');
const play = document.getElementById('play');
const stops = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

function toggleVideoStatus() {
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updatePlayIcon() {
  if(video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>' 
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>' 
  }
}

function updateProgress() {
  return true;
}

function setVideoProgress() {
  return true;
}

function stopVideo() {
  video.currentTime = 0;
  video.pause();
}


video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeup', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stops.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);


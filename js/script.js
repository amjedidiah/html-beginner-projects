const togglePlay = () => {
  const video = document.querySelector("video");
  const toggleImage = window.event.target;
  const cover = document.querySelector("#section-one");

  if (!video.paused) {
    cover.classList.add("paused");
    video.classList.add("paused");
  }
  if (video.paused) {
    cover.classList.remove("paused");
    video.classList.remove("paused");
  }

  toggleImage.src = `./media/${video.paused ? "pause" : "play"}.png`;
  return video.paused ? video.play() : video.pause();
};

const toggleSound = () => {
  const video = document.querySelector("video");
  const toggleImage = window.event.target;

  video.muted = !video.muted;
  toggleImage.src = `./media/${video.muted ? "muted" : "unmuted"}.png`;
};

AFRAME.registerComponent("videoplayer", {
  init: function () {
    const videosource = document.querySelector("#videoclip");

    // Play video on click
    this.el.addEventListener("click", () => {
      videosource.play();
    });
  },
});

AFRAME.registerComponent("videopauser", {
  init: function () {
    const videosource = document.querySelector("#videoclip");

    // Pause video on click
    this.el.addEventListener("click", () => {
      videosource.pause();
    });
  },
});

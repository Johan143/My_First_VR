let selectedTrack = null;

AFRAME.registerComponent("songselector", {
  init: function () {
    this.el.addEventListener("click", () => {
      // Hide all frames
      document.querySelectorAll('[id^="frame"]').forEach((el) => {
        el.setAttribute("visible", false);
      });

      // Set selected track
      selectedTrack = this.el;

      // Show corresponding frame
      const frameId = this.el.id.replace("track", "frame");
      const frameEl = document.querySelector("#" + frameId);
      if (frameEl) {
        frameEl.setAttribute("visible", true);
      }
    });
  },
});

AFRAME.registerComponent("songplayer", {
  init: function () {
    this.el.addEventListener("click", () => {
      if (selectedTrack) {
        selectedTrack.emit("playSound");
      }
    });
  },
});

AFRAME.registerComponent("songstopper", {
  init: function () {
    this.el.addEventListener("click", () => {
      if (selectedTrack && selectedTrack.components.sound) {
        selectedTrack.components.sound.stopSound();
      }
    });
  },
});

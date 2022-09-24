import "./music.js";
import { music_button } from "./music_button.js";
import { storage_manager } from "./storage_music.js";
import lottieWeb from "https://cdn.skypack.dev/lottie-web";

const music_module = (() => {
  const toggle_tab = () => {
    const btn = document.querySelector(".log");
    let isToggle = false;
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      isToggle = !isToggle;
      const box = document.querySelector(".music_list");
      box.classList.add("toggle_tab");

      if (box.classList.contains("toggle_tab") && !isToggle)
        box.classList.remove("toggle_tab");
    });
  };

  toggle_tab();

  const render = () => {
    const song = storage_manager.getMusics().map((song, index, array) => {
      return `
      <div class="music-btn">
      <h3 class="song_${index}">${song.name}</h3>
      <p class="play" onclick="music_button.play("#audio")" data-song="${index}">Play</p>
      <p class="stop" data-song="${index}">Stop</p>
      <audio id="audio" src="img/code.mp3" preload="metadata">Nek</audio>
    </div>`;
    });
    document.querySelector(".music_list").innerHTML = song.join("");
  };

  render();
  music_button.handleEvent();
})();

export { music_module };

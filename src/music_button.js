import { storage_manager } from "./storage_music.js";
const music_button = (() => {
  const handleEvent = () => {
    const btn = document.querySelectorAll(".music-btn");
    for (let index = 0; index < btn.length; index++) {
      btn[index].addEventListener("click", (event) => {
        event.preventDefault();
        const childNodes = event.target.childNodes;
        childNodes.forEach((element) => {
          if (String(element.data).includes("Play")) {
            play(childNodes);
          } else if (String(element.data).includes("Stop")) {
            stop(childNodes);
          } else {
            return;
          }
        });
      });
    }
  };

  const play = (childNodes) => {
    const parentNode = childNodes[0].parentNode;
    const _id = parentNode.dataset;
    const { name, singer, path, image } = storage_manager.getMusic(_id.song);
    const audio = parentNode.parentNode.querySelector("#audio");
    console.log(audio.play());
    console.log("Play started");
  };

  const stop = (childNodes) => {
    const parentNode = childNodes[0].parentNode;
    const _id = parentNode.dataset;
    const { name, singer, path, image } = storage_manager.getMusic(_id.song);
    const audio = parentNode.parentNode.querySelector("#audio");
    console.log(audio.pause());
    console.log("Stop started");
  };

  const next = () => {};

  const pre = () => {};
  return {
    handleEvent,
    play,
    stop,
    next,
    pre,
  };
})();

export { music_button };

import "./music_module.js";
import "./storage_music.js";
import { storage_manager } from "./storage_music.js";
import "./timework.js";

const div = document.querySelector(".music");
const display = async () => {
  const music = await storage_manager.getMusics();
  if (await music) div.innerHTML = music;
};

display();

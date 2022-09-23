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
})();

export { music_module };

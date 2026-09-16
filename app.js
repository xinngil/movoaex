(() => {
  const target = new Date("2026-09-22T14:22:00-03:00").getTime();
  const el = document.getElementById("countdown");
  const apk = document.getElementById("apkButton");
  const note = document.getElementById("apkNote");

  function tick(){
    const diff = target - Date.now();
    if(diff <= 0){
      if(el) el.textContent = "Ventana de lanzamiento abierta";
      if(apk){
        apk.classList.remove("disabled");
        apk.removeAttribute("aria-disabled");
        apk.textContent = "Descargar APK";
      }
      if(note) note.textContent = "Si la compilación final aún no está publicada, vuelve a intentarlo en unos minutos.";
      return;
    }
    const d = Math.floor(diff/86400000);
    const h = Math.floor(diff%86400000/3600000);
    const m = Math.floor(diff%3600000/60000);
    const s = Math.floor(diff%60000/1000);
    if(el) el.textContent = `${d}d ${h}h ${m}m ${s}s`;
  }
  tick();
  setInterval(tick,1000);

  document.addEventListener("click", e => {
    const link = e.target.closest("a[aria-disabled='true']");
    if(link) e.preventDefault();
  });
})();
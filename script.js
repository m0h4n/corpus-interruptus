
window.onload = function () {
  const layers = [
    "rumiar",
    "latir",
    "respirar",
    "digerir",
    "expulsar",
    "caminar"
  ];
  window.mapper = new Maptastic({
    autoLoad: false,
    autoSave: true,
    layers: layers
  });
  let editing = false;
  window.addEventListener("keydown", function (event) {
    if (event.shiftKey && event.code === "Space") {
      event.preventDefault();
      event.stopImmediatePropagation();
      if (event.repeat) return;
      editing = !editing;
      window.mapper.setConfigEnabled(editing);
    }
  }, true);
};

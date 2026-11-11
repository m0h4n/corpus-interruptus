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
    autoLoad: true,
    autoSave: true,
    layers: layers
  });
};
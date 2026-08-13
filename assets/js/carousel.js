(function () {
  var root = document.querySelector("[data-carousel]");
  if (!root) return;

  var track = root.querySelector("[data-carousel-track]");
  var cards = track ? Array.prototype.slice.call(track.children) : [];
  var prev = root.querySelector("[data-carousel-prev]");
  var next = root.querySelector("[data-carousel-next]");
  var index = 0;

  function perView() {
    if (window.matchMedia("(max-width: 680px)").matches) return 1;
    if (window.matchMedia("(max-width: 980px)").matches) return 2;
    return 3;
  }

  function render() {
    var visible = perView();
    var max = Math.max(0, cards.length - visible);
    if (index > max) index = max;
    cards.forEach(function (card, i) {
      card.style.display = i >= index && i < index + visible ? "flex" : "none";
    });
    if (prev) prev.disabled = index === 0;
    if (next) next.disabled = index >= max;
  }

  if (prev) {
    prev.addEventListener("click", function () {
      index = Math.max(0, index - 1);
      render();
    });
  }

  if (next) {
    next.addEventListener("click", function () {
      index += 1;
      render();
    });
  }

  window.addEventListener("resize", render);
  render();
})();

(function () {
  var root = document.querySelector("[data-slider]");
  if (!root) return;

  var slides = Array.prototype.slice.call(root.querySelectorAll(".slide"));
  var prev = root.querySelector("[data-slider-prev]");
  var next = root.querySelector("[data-slider-next]");
  var dotsWrap = root.querySelector("[data-slider-dots]");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var index = 0;
  var timer = null;

  if (!slides.length) return;

  function go(nextIndex) {
    index = (nextIndex + slides.length) % slides.length;
    slides.forEach(function (slide, i) {
      slide.classList.toggle("is-active", i === index);
      slide.setAttribute("aria-hidden", i === index ? "false" : "true");
    });
    if (dotsWrap) {
      Array.prototype.forEach.call(dotsWrap.children, function (dot, i) {
        dot.classList.toggle("is-active", i === index);
        dot.setAttribute("aria-current", i === index ? "true" : "false");
      });
    }
  }

  function play() {
    if (reduceMotion || slides.length < 2) return;
    stop();
    timer = window.setInterval(function () {
      go(index + 1);
    }, 5000);
  }

  function stop() {
    if (timer) window.clearInterval(timer);
    timer = null;
  }

  slides.forEach(function (slide, i) {
    if (dotsWrap) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", "Go to slide " + (i + 1));
      if (i === 0) dot.classList.add("is-active");
      dot.addEventListener("click", function () {
        go(i);
        play();
      });
      dotsWrap.appendChild(dot);
    }
  });

  if (prev) prev.addEventListener("click", function () { go(index - 1); play(); });
  if (next) next.addEventListener("click", function () { go(index + 1); play(); });

  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", play);
  root.addEventListener("focusin", stop);
  root.addEventListener("focusout", play);

  var startX = null;
  root.addEventListener("touchstart", function (event) {
    startX = event.changedTouches[0].clientX;
    stop();
  }, { passive: true });

  root.addEventListener("touchend", function (event) {
    if (startX == null) return;
    var delta = event.changedTouches[0].clientX - startX;
    if (Math.abs(delta) > 40) go(delta > 0 ? index - 1 : index + 1);
    startX = null;
    play();
  });

  document.addEventListener("keydown", function (event) {
    if (!root.contains(document.activeElement) && document.activeElement !== document.body) return;
    if (event.key === "ArrowLeft") go(index - 1);
    if (event.key === "ArrowRight") go(index + 1);
  });

  go(0);
  play();
})();

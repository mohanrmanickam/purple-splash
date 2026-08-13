(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  var year = document.getElementById("year");
  var form = document.querySelector("[data-contact-form]");

  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });
  }

  document.querySelectorAll("[data-dropdown]").forEach(function (item) {
    var trigger = item.querySelector(".nav-link");
    if (!trigger) return;
    trigger.addEventListener("click", function (event) {
      if (window.matchMedia("(max-width: 980px)").matches) {
        event.preventDefault();
        item.classList.toggle("is-open");
      }
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      document.querySelectorAll(".nav-list > li.is-open").forEach(function (item) {
        item.classList.remove("is-open");
      });
      if (toggle && nav) {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      }
    }
  });

  if (year) year.textContent = String(new Date().getFullYear());

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var status = form.querySelector(".form-status");
      var action = form.getAttribute("action") || "";
      if (action.indexOf("xxxx") !== -1 || action.indexOf("FORM_ID") !== -1) {
        if (status) {
          status.textContent =
            "Thanks — this sample form is ready for Formspree. Add your form ID to start receiving messages.";
          status.classList.add("is-visible");
          status.classList.remove("is-error");
        }
        form.reset();
        return;
      }
      fetch(action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (response) {
          if (!status) return;
          if (response.ok) {
            status.textContent = "Thank you. We will be in touch shortly.";
            status.classList.add("is-visible");
            status.classList.remove("is-error");
            form.reset();
          } else {
            throw new Error("Request failed");
          }
        })
        .catch(function () {
          if (!status) return;
          status.textContent = "Something went wrong. Please email hello@purplesplash.example instead.";
          status.classList.add("is-visible", "is-error");
        });
    });
  }
})();

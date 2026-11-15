(function () {
  var root = document.documentElement;
  var key = "theme";
  var moon = "\u263E\uFE0E";
  var sun = "\u263C\uFE0E";

  try {
    if (localStorage.getItem(key) === "dark") {
      root.setAttribute("data-theme", "dark");
    }
  } catch (err) {}

  function label(button) {
    var dark = root.getAttribute("data-theme") === "dark";
    var name = dark ? "Switch to light mode" : "Switch to dark mode";
    button.textContent = dark ? sun : moon;
    button.setAttribute("aria-label", name);
    button.setAttribute("title", name);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("theme-toggle");
    if (!button) {
      return;
    }
    label(button);
    button.addEventListener("click", function () {
      if (root.getAttribute("data-theme") === "dark") {
        root.removeAttribute("data-theme");
        try {
          localStorage.removeItem(key);
        } catch (err) {}
      } else {
        root.setAttribute("data-theme", "dark");
        try {
          localStorage.setItem(key, "dark");
        } catch (err) {}
      }
      label(button);
    });
  });
}());

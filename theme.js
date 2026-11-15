(function () {
  var root = document.documentElement;
  var key = "theme";

  try {
    if (localStorage.getItem(key) === "dark") {
      root.setAttribute("data-theme", "dark");
    }
  } catch (err) {}

  function label(button) {
    var dark = root.getAttribute("data-theme") === "dark";
    button.textContent = dark ? "Light" : "Dark";
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

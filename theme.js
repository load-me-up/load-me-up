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

  /*
    The ornament spans are hidden in CSS until this face has
    loaded. A missing file leaves them blank, so the page
    never shows a stray "(" or letter.
  */
  if (document.fonts && document.fonts.load) {
    document.fonts.load('1em "Jannon Ornaments"', "(S").then(function (faces) {
      var loaded = false;
      var i;
      for (i = 0; i < faces.length; i++) {
        if (faces[i].status === "loaded") {
          loaded = true;
        }
      }
      if (loaded) {
        root.classList.add("ornaments");
      }
    }).catch(function () {});
  }

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

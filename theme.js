(function () {
  var root = document.documentElement;
  var key = "theme";
  var lightBar = "#F7F3E8";
  var darkBar = "#1C1B18";

  function saved() {
    try {
      return localStorage.getItem(key);
    } catch (err) {
      return null;
    }
  }

  function darkNow() {
    return root.getAttribute("data-theme") === "dark";
  }

  function paint(dark) {
    if (dark) {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", dark ? darkBar : lightBar);
    }
  }

  function label(button) {
    if (!button) {
      return;
    }
    var name = darkNow() ? "Switch to light mode" : "Switch to dark mode";
    button.setAttribute("aria-label", name);
    button.setAttribute("title", name);
  }

  /*
    The ornament spans are hidden in CSS until this face has
    loaded. A missing file leaves them blank, so the page
    never shows a stray ")" or letter.
  */
  if (document.fonts && document.fonts.load) {
    document.fonts.load('1em "Jannon Ornaments"', ")S").then(function (faces) {
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

  var media = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  if (media) {
    var followSystem = function () {
      var choice = saved();
      if (choice === "light" || choice === "dark") {
        return;
      }
      paint(media.matches);
      label(document.getElementById("theme-toggle"));
    };
    if (media.addEventListener) {
      media.addEventListener("change", followSystem);
    } else if (media.addListener) {
      media.addListener(followSystem);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("theme-toggle");
    if (!button) {
      return;
    }
    label(button);
    button.addEventListener("click", function () {
      var nextDark = !darkNow();
      paint(nextDark);
      try {
        localStorage.setItem(key, nextDark ? "dark" : "light");
      } catch (err) {}
      label(button);
    });
  });
}());

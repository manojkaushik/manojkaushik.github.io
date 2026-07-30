(function () {
  function getLayoutPath() {
    return window.location.pathname.indexOf("/subjects/") !== -1
      ? "../shared-layout.html"
      : "shared-layout.html";
  }

  function getCurrentPageKey() {
    var path = window.location.pathname.replace(/\/+$/, "");
    if (!path || path === "/" || path.endsWith("/index.html")) {
      return "index";
    }
    if (path.endsWith("/research.html")) {
      return "research";
    }
    if (path.endsWith("/projects.html")) {
      return "projects";
    }
    if (path.endsWith("/subjects/tcs302-data-structures.html")) {
      return "subject-tcs302";
    }
    if (path.endsWith("/subjects/tcs349-responsible-ai.html")) {
      return "subject-tcs349";
    }
    if (path.endsWith("/subjects/tcs409-daa.html")) {
      return "subject-tcs409";
    }
    if (path.endsWith("/subjects/tcs601-compiler_design.html")) {
      return "subject-tcs601";
    }
    return "index";
  }

  function activateNav(pageKey) {
    var links = document.querySelectorAll("[data-nav-page]");
    links.forEach(function (link) {
      var isActive = link.getAttribute("data-nav-page") === pageKey;
      link.classList.toggle("active", isActive);
    });
  }

  function loadSharedLayout() {
    var sidebarTarget = document.getElementById("shared-sidebar");
    var navTarget = document.getElementById("shared-nav");
    var footerTarget = document.getElementById("shared-footer");

    if (!sidebarTarget && !navTarget && !footerTarget) {
      return;
    }

    fetch(getLayoutPath(), { cache: "no-store" })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Unable to load shared layout");
        }
        return response.text();
      })
      .then(function (html) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, "text/html");

        if (sidebarTarget) {
          var sidebarMarkup = doc.querySelector('[data-part="sidebar"]');
          if (sidebarMarkup) {
            sidebarTarget.innerHTML = sidebarMarkup.innerHTML;
          }
        }

        if (navTarget) {
          var navMarkup = doc.querySelector('[data-part="nav"]');
          if (navMarkup) {
            navTarget.innerHTML = navMarkup.innerHTML;
          }
        }

        if (footerTarget) {
          var footerMarkup = doc.querySelector('[data-part="footer"]');
          if (footerMarkup) {
            footerTarget.innerHTML = footerMarkup.innerHTML;
          }
        }

        activateNav(getCurrentPageKey());

        if (typeof window.initEmailScramble === "function") {
          window.initEmailScramble();
        }
      })
      .catch(function (error) {
        console.error("Shared layout load failed:", error);
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadSharedLayout);
  } else {
    loadSharedLayout();
  }
})();

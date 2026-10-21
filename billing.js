// Price page: monthly is pre-selected (Oct 20 2026); yearly shows the prepay price (2 months free).
(function () {
  var pills = document.querySelectorAll(".billing-toggle .pill");
  if (!pills.length) { return; }
  function set(mode) {
    pills.forEach(function (p) {
      var on = p.getAttribute("data-billing") === mode;
      p.classList.toggle("on", on);
      p.setAttribute("aria-pressed", on ? "true" : "false");
    });
    document.querySelectorAll("[data-monthly][data-yearly]").forEach(function (el) {
      el.innerHTML = el.getAttribute("data-" + mode);
    });
    document.querySelectorAll("a[data-plan-link]").forEach(function (a) {
      // Keep the link's own folder (../signup.html on business type pages) so it never points at trades/signup.html.
      var href = a.getAttribute("href");
      var u = new URL(href, location.href);
      u.searchParams.set("billing", mode);
      a.setAttribute("href", href.split("?")[0] + u.search);
    });
  }
  pills.forEach(function (p) { p.addEventListener("click", function () { set(p.getAttribute("data-billing")); }); });
  set("monthly");
})();

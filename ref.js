// Personal partner links: getansweredreviews.com/?ref=CODE (also audit.html?ref=CODE).
// Keeps the code for the visit, puts it in every form's "Partner code" field,
// and carries it on links to the audit and sign up pages.
(function () {
  var KEY = "ar_ref";
  function clean(v) { return (v || "").replace(/[^A-Za-z0-9_]/g, "").slice(0, 40); }
  var code = clean(new URLSearchParams(location.search).get("ref"));
  try {
    if (code) { localStorage.setItem(KEY, JSON.stringify({ code: code, at: Date.now() })); }
    else {
      var saved = JSON.parse(localStorage.getItem(KEY) || "null");
      if (saved && Date.now() - saved.at < 90 * 864e5) { code = clean(saved.code); }
    }
  } catch (e) { /* storage blocked: the code still rides on the links below */ }
  if (!code) { return; }
  document.querySelectorAll('input[name="Partner code"]').forEach(function (el) { el.value = code; });
  document.querySelectorAll('a[href*="signup.html"], a[href*="audit.html"]').forEach(function (a) {
    var u = new URL(a.getAttribute("href"), location.href);
    if (!u.searchParams.get("ref")) { u.searchParams.set("ref", code); a.setAttribute("href", u.pathname.split("/").pop() + u.search + u.hash); }
  });
})();

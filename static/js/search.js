(function () {
  var input = document.getElementById('search-input');
  var status = document.getElementById('search-status');
  var results = document.getElementById('search-results');
  if (!input || !results) return;

  var index = [];

  function esc(s) {
    return s.replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function render(items, query) {
    status.textContent = items.length + ' result' + (items.length === 1 ? '' : 's') +
      (query ? ' / ' + query.toUpperCase() : ' / ALL PAGES');
    results.innerHTML = items.map(function (p, i) {
      return '<a class="index-row" href="' + esc(p.href) + '">' +
        '<span class="index-num">' + String(i + 1).padStart(2, '0') + '</span>' +
        '<span class="index-body"><h3>' + esc(p.title) + '</h3>' +
        '<span class="index-meta">' + esc(p.section || 'page') + '</span></span></a>';
    }).join('');
  }

  function search(query) {
    var q = query.trim().toLowerCase();
    if (!q) return index;
    var terms = q.split(/\s+/);
    return index.filter(function (p) {
      var hay = (p.title + ' ' + p.tags + ' ' + p.summary + ' ' + p.section).toLowerCase();
      return terms.every(function (t) { return hay.indexOf(t) !== -1; });
    });
  }

  var timer;
  input.addEventListener('input', function () {
    clearTimeout(timer);
    timer = setTimeout(function () { render(search(input.value), input.value.trim()); }, 120);
  });

  fetch('/index.json')
    .then(function (r) { return r.json(); })
    .then(function (data) {
      index = data;
      var q = new URLSearchParams(location.search).get('q');
      if (q) input.value = q;
      render(search(input.value), input.value.trim());
    })
    .catch(function () {
      status.textContent = 'ERROR / INDEX UNAVAILABLE';
    });
})();

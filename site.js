/* Small things only: the language and theme switches, forwarding a few old links,
   the Ecosystem map, and the contributor logos. */
(function () {
  var d = document.documentElement;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { if (v == null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) {} }
  };
  var $$ = function (sel, el) { return Array.prototype.slice.call((el || document).querySelectorAll(sel)); };

  /* Old links. The first site shared parts of its map as /?star=<key>;
     those keys land on the matching part of the Ecosystem page.
     A few part names also work as hashes on the home page (/#lyra). */
  if (document.body.getAttribute('data-page') === 'home') {
    var stars = { pi: '', lyra: 'lyra', memory: 'jobs', research: 'research', code: 'agents', tools: 'chrome' };
    var parts = { lyra: 'lyra', jobs: 'jobs', research: 'research', chrome: 'chrome', reading: 'reading', agents: 'agents', rules: 'rules', safety: 'rules', day: 'day', public: 'public' };
    var star = null;
    try { star = new URLSearchParams(location.search).get('star'); } catch (e) {}
    var hash = location.hash.slice(1);
    var target = star !== null
      ? (stars.hasOwnProperty(star) ? stars[star] : '')
      : (parts.hasOwnProperty(hash) ? parts[hash] : null);
    if (target !== null) {
      location.replace('/ecosystem/' + (target ? '#' + target : ''));
      return;
    }
  }

  /* Language */
  function setLang(lang, save) {
    d.setAttribute('data-lang', lang);
    d.lang = lang === 'zh' ? 'zh-CN' : 'en';
    var title = d.getAttribute('data-title-' + lang);
    if (title) document.title = title;
    $$('[data-lang-toggle]').forEach(function (b) {
      b.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换到中文');
    });
    if (save) {
      store.set('lang', lang);
      if (/[?&]lang=/.test(location.search) && window.history && history.replaceState) {
        var url = new URL(location.href);
        url.searchParams.delete('lang');
        history.replaceState(null, '', url.pathname + url.search + url.hash);
      }
    }
  }
  setLang(d.getAttribute('data-lang') === 'zh' ? 'zh' : 'en', false);
  $$('[data-lang-toggle]').forEach(function (b) {
    b.addEventListener('click', function () {
      setLang(d.getAttribute('data-lang') === 'zh' ? 'en' : 'zh', true);
    });
  });

  /* Theme: auto follows the system; light and dark are remembered. */
  function setTheme(choice, save) {
    if (choice === 'light' || choice === 'dark') d.setAttribute('data-theme', choice);
    else d.removeAttribute('data-theme');
    $$('[data-theme-set]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-theme-set') === (choice || 'auto')));
    });
    if (save) store.set('theme', choice === 'auto' ? null : choice);
  }
  setTheme(d.getAttribute('data-theme') || 'auto', false);
  $$('[data-theme-set]').forEach(function (b) {
    b.addEventListener('click', function () { setTheme(b.getAttribute('data-theme-set'), true); });
  });

  /* The Ecosystem map: select a part to read about it.
     Wide screens keep the caption beside the map; narrow ones open it under the chosen row. */
  var map = document.querySelector('[data-map]');
  if (map) {
    var grid = map.querySelector('.map-grid');
    var cap = document.getElementById('caption');
    var tiles = $$('[data-part]', map);
    var wires = $$('.wires path', map);
    var narrow = window.matchMedia('(max-width: 960px)');
    var current = 'pi';
    var place = function () {
      if (!narrow.matches) { if (cap.parentNode !== map) grid.insertAdjacentElement('afterend', cap); return; }
      var tile = document.getElementById(current);
      var row = tile.offsetTop, after = tile;
      tiles.forEach(function (t) { if (t.offsetTop === row) after = t; });
      if (after.nextElementSibling !== cap) after.insertAdjacentElement('afterend', cap);
    };
    var select = function (id) {
      var tpl = document.getElementById('about-' + id);
      if (!tpl) return;
      current = id;
      tiles.forEach(function (t) { t.setAttribute('aria-pressed', String(t.getAttribute('data-part') === id)); });
      wires.forEach(function (w) { w.classList.toggle('on', w.getAttribute('data-for') === id); });
      cap.style.setProperty('--c', tpl.getAttribute('data-c'));
      cap.innerHTML = '';
      cap.appendChild(tpl.content.cloneNode(true));
      place();
    };
    tiles.forEach(function (t) {
      var id = t.getAttribute('data-part');
      t.addEventListener('click', function () { select(id); });
      t.addEventListener('focus', function () { if (current !== id) select(id); });
    });
    if (narrow.addEventListener) narrow.addEventListener('change', place);
    var first = location.hash.slice(1);
    select(document.getElementById('about-' + first) ? first : 'pi');
  }

  /* Contributor logos: hover or focus shows the PRs; a tap pins them open. */
  var logos = $$('.logo');
  if (logos.length) {
    var fit = function (li) {
      var pop = li.querySelector('.pop');
      li.style.setProperty('--shift', '0px');
      var r = pop.getBoundingClientRect();
      var vw = document.documentElement.clientWidth;
      var s = 0;
      if (r.left < 10) s = 10 - r.left;
      else if (r.right > vw - 10) s = vw - 10 - r.right;
      li.style.setProperty('--shift', Math.round(s) + 'px');
    };
    /* A first guess from each logo's position, so a popover never opens off-screen. */
    var guess = function () {
      var vw = document.documentElement.clientWidth;
      var w = Math.min(330, vw * 0.86);
      logos.forEach(function (li) {
        var r = li.getBoundingClientRect();
        var c = r.left + r.width / 2, s = 0;
        if (c - w / 2 < 10) s = 10 - (c - w / 2);
        else if (c + w / 2 > vw - 10) s = vw - 10 - (c + w / 2);
        li.style.setProperty('--shift', Math.round(s) + 'px');
      });
    };
    guess();
    window.addEventListener('resize', guess);
    var closeAll = function (except) {
      logos.forEach(function (li) {
        if (li === except) return;
        li.classList.remove('open');
        li.querySelector('button').setAttribute('aria-expanded', 'false');
      });
    };
    logos.forEach(function (li) {
      var btn = li.querySelector('button');
      li.addEventListener('mouseenter', function () { fit(li); });
      li.addEventListener('focusin', function () { fit(li); });
      btn.addEventListener('click', function () {
        var open = !li.classList.contains('open');
        closeAll(li);
        li.classList.toggle('open', open);
        btn.setAttribute('aria-expanded', String(open));
        if (open) fit(li);
      });
    });
    document.addEventListener('click', function (e) { if (!e.target.closest || !e.target.closest('.logo')) closeAll(null); });
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      var li = document.activeElement && document.activeElement.closest && document.activeElement.closest('.logo');
      closeAll(null);
      if (li) { li.querySelector('button').focus(); li.classList.add('quiet'); }
    });
    logos.forEach(function (li) { li.addEventListener('focusout', function () { li.classList.remove('quiet'); }); });
  }
})();

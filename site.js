/* Small things only: the language and theme switches, the Ecosystem figure,
   a reading-progress hairline, and forwarding a few old links. */
(function () {
  var d = document.documentElement;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { if (v == null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) {} }
  };
  var $$ = function (sel, el) { return Array.prototype.slice.call((el || document).querySelectorAll(sel)); };

  /* Old links from the previous version of the site. */
  if (document.body.getAttribute('data-page') === 'home') {
    var old = { day: 'day', public: 'public', atlas: '', lyra: 'lyra', jobs: 'jobs', research: 'research', chrome: 'chrome', reading: 'reading', agents: 'agents', safety: 'rules' };
    var star = null;
    try { star = new URLSearchParams(location.search).get('star'); } catch (e) {}
    var hash = location.hash.slice(1);
    var target = star && old.hasOwnProperty(star) ? old[star] : (old.hasOwnProperty(hash) ? old[hash] : null);
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

  /* The Ecosystem figure: select a part to read about it in the caption. */
  var fig = document.querySelector('[data-eco]');
  if (fig) {
    var caption = document.getElementById('eco-caption');
    var nodes = $$('.node', fig);
    var spokes = $$('.spoke', fig);
    var select = function (id) {
      var src = document.getElementById('about-' + id);
      if (!src || !caption) return;
      nodes.forEach(function (n) {
        var on = n.getAttribute('data-node') === id;
        n.classList.toggle('is-on', on);
        if (on) n.setAttribute('aria-current', 'true'); else n.removeAttribute('aria-current');
      });
      spokes.forEach(function (s) { s.classList.toggle('is-on', s.getAttribute('data-for') === id); });
      caption.innerHTML = src.innerHTML;
    };
    nodes.forEach(function (n) {
      var id = n.getAttribute('data-node');
      n.addEventListener('click', function (e) { e.preventDefault(); select(id); });
      n.addEventListener('focus', function () { select(id); });
      n.addEventListener('keydown', function (e) {
        if (e.key === ' ') { e.preventDefault(); select(id); }
      });
    });
    var first = location.hash.slice(1);
    select(document.getElementById('about-' + first) ? first : 'pi');
  }

  /* Reading progress */
  var bar = document.querySelector('.progress');
  if (bar) {
    var ticking = false;
    var update = function () {
      ticking = false;
      var max = d.scrollHeight - window.innerHeight;
      bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, window.scrollY / max) : 0) + ')';
    };
    var onScroll = function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
  }
})();

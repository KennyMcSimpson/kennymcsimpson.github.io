/* Runs before first paint, so nothing flashes.
   Language: ?lang=en|zh (remembered), else the saved choice, else the browser's first language.
   Theme: the saved choice (light/dark), else the system setting. */
(function () {
  var d = document.documentElement;
  var read = function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } };
  d.className += ' js';
  var m = /[?&]lang=(zh|en)/i.exec(location.search);
  var lang = m ? m[1].toLowerCase() : (read('lang') || read('kenny-language'));
  if (m) { try { localStorage.setItem('lang', lang); } catch (e) {} }
  if (lang && lang.indexOf('zh') === 0) lang = 'zh';
  if (lang !== 'zh' && lang !== 'en') {
    var first = (navigator.languages && navigator.languages[0]) || navigator.language || '';
    lang = /^zh\b/i.test(first) ? 'zh' : 'en';
  }
  d.setAttribute('data-lang', lang);
  d.lang = lang === 'zh' ? 'zh-CN' : 'en';
  var title = d.getAttribute('data-title-' + lang);
  if (title) document.title = title;
  var theme = read('theme');
  if (theme === 'light' || theme === 'dark') d.setAttribute('data-theme', theme);
})();

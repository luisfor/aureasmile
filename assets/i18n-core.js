/**
 * AUREA SMILE — Shared i18n Engine & Persistence Manager
 * Ensures persistent language choice across all pages and routes.
 */
(function(window) {
  'use strict';

  var STORAGE_KEY = 'aurea_smile_lang';

  function getSavedLanguage() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'es') return saved;
    } catch(e) {}
    return 'es';
  }

  function saveLanguage(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch(e) {}
  }

  window.AureaI18n = {
    getLang: getSavedLanguage,
    setLang: function(lang, dict, onUpdate) {
      if (lang !== 'es' && lang !== 'en') lang = 'es';
      saveLanguage(lang);
      document.documentElement.lang = lang;

      // Update switcher buttons state
      var btnEs = document.getElementById('btn-es');
      var btnEn = document.getElementById('btn-en');
      var btnEsMob = document.getElementById('btn-es-mob');
      var btnEnMob = document.getElementById('btn-en-mob');

      if (btnEs) btnEs.classList.toggle('active', lang === 'es');
      if (btnEn) btnEn.classList.toggle('active', lang === 'en');
      if (btnEsMob) btnEsMob.classList.toggle('active', lang === 'es');
      if (btnEnMob) btnEnMob.classList.toggle('active', lang === 'en');

      // Update data-i18n elements if dictionary provided
      if (dict && dict[lang]) {
        var d = dict[lang];
        document.querySelectorAll('[data-i18n]').forEach(function(el) {
          var k = el.getAttribute('data-i18n');
          if (d[k] !== undefined) {
            el.innerHTML = d[k];
          }
        });
      }

      if (typeof onUpdate === 'function') {
        onUpdate(lang);
      }
    },

    bindButtons: function(dict, onUpdate) {
      var self = this;
      var btnEs = document.getElementById('btn-es');
      var btnEn = document.getElementById('btn-en');
      var btnEsMob = document.getElementById('btn-es-mob');
      var btnEnMob = document.getElementById('btn-en-mob');

      if (btnEs) btnEs.addEventListener('click', function() { self.setLang('es', dict, onUpdate); });
      if (btnEn) btnEn.addEventListener('click', function() { self.setLang('en', dict, onUpdate); });
      if (btnEsMob) btnEsMob.addEventListener('click', function() { self.setLang('es', dict, onUpdate); });
      if (btnEnMob) btnEnMob.addEventListener('click', function() { self.setLang('en', dict, onUpdate); });

      // Apply initial saved language
      var initial = self.getLang();
      self.setLang(initial, dict, onUpdate);
    }
  };
})(window);
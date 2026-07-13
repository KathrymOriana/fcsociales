/* ==========================================================================
   Facultad de Ciencias Sociales — script.js
   Interacciones: navbar al hacer scroll, botón volver arriba, validación de
   formularios, toast de confirmación, contador animado y AOS.
   ========================================================================== */
(function () {
  'use strict';

  /* ---------- Inicializar AOS (animaciones suaves) ---------- */
  if (window.AOS) {
    AOS.init({
      duration: 650,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
      disable: function () {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      }
    });
  }

  /* ---------- Header: sombra al hacer scroll ---------- */
  var header = document.querySelector('.site-header');
  function toggleHeaderShadow() {
    if (!header) return;
    if (window.scrollY > 12) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }
  toggleHeaderShadow();
  window.addEventListener('scroll', toggleHeaderShadow, { passive: true });

  /* ---------- Botón volver arriba ---------- */
  var backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    function toggleBackToTop() {
      if (window.scrollY > 420) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    }
    toggleBackToTop();
    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Cerrar el menú offcanvas al elegir un enlace (mobile) ---------- */
  var offcanvasEl = document.getElementById('mobileSidebar');
  if (offcanvasEl && window.bootstrap) {
    var offcanvasInstance = window.bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
    offcanvasEl.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        offcanvasInstance.hide();
      });
    });
  }

  /* ---------- Toast helper ---------- */
  function showToast(toastId) {
    var toastEl = document.getElementById(toastId);
    if (!toastEl || !window.bootstrap) return;
    var toast = new window.bootstrap.Toast(toastEl, { delay: 4500 });
    toast.show();
  }

  /* ---------- Validación de formularios (Bootstrap custom validation) ---------- */
  var forms = document.querySelectorAll('.needs-validation');
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();

      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        // Enfocar el primer campo inválido para feedback accesible
        var firstInvalid = form.querySelector(':invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      form.classList.add('was-validated');

      // Simulación de envío exitoso
      var toastId = form.getAttribute('data-toast-target');
      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        var originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Enviando...';

        setTimeout(function () {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          form.reset();
          form.classList.remove('was-validated');
          if (toastId) showToast(toastId);
        }, 900);
      }
    }, false);
  });

  /* ---------- Contador animado para las estadísticas del hero ---------- */
  var counters = document.querySelectorAll('[data-counter]');
  if (counters.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    counters.forEach(function (el) { observer.observe(el); });
  }

  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-counter'), 10) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 1200;
    var start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var value = Math.floor(progress * target);
      el.textContent = value + suffix;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
      }
    }
    window.requestAnimationFrame(step);
  }

  /* ---------- Año actual en el footer ---------- */
  document.querySelectorAll('[data-current-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

})();

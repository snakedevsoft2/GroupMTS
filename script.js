/* ============================================================
   GroupMTS — Interacciones
   ------------------------------------------------------------
   Nav pegajosa + scrollspy, barra de progreso, parallax,
   contadores, cursor personalizado, hover magnetico,
   comparador antes/despues, filtros de galeria + lightbox,
   y carrusel de testimonios.
   Sin dependencias externas.
   ============================================================ */
(function () {
    "use strict";
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var $ = function (s, c) { return (c || document).querySelector(s); };
    var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

    /* ============================================================
       IDIOMA — Espanol / Ingles
       El espanol vive en el HTML; el ingles va en atributos
       data-en (texto plano) y data-en-html (texto con etiquetas).
       ============================================================ */
    var LANG = '';
    try { LANG = localStorage.getItem('mts-lang') || ''; } catch (e) { LANG = ''; }
    if (LANG !== 'es' && LANG !== 'en') {
        LANG = (navigator.language || 'es').toLowerCase().indexOf('en') === 0 ? 'en' : 'es';
    }

    function applyLang(lang) {
        LANG = lang;
        document.documentElement.setAttribute('lang', lang);
        try { localStorage.setItem('mts-lang', lang); } catch (e) { }

        $$('[data-en]').forEach(function (el) {
            if (el.hasAttribute('data-i18n-nav')) return;            // el menu se arma aparte
            if (el.getAttribute('data-es') === null) el.setAttribute('data-es', el.textContent);
            el.textContent = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-es');
        });
        $$('[data-en-html]').forEach(function (el) {
            if (el.getAttribute('data-es-html') === null) el.setAttribute('data-es-html', el.innerHTML);
            el.innerHTML = lang === 'en' ? el.getAttribute('data-en-html') : el.getAttribute('data-es-html');
        });

        $$('.lang').forEach(function (b) {
            b.classList.toggle('is-en', lang === 'en');
            b.setAttribute('aria-label', lang === 'en' ? 'Cambiar a espanol' : 'Switch to English');
            b.setAttribute('title', lang === 'en' ? 'Espanol' : 'English');
        });

        buildRolls();
        refreshCounters();
        restPill();
        measureMarquee();
    }

    /* ---------- Año ---------- */
    $('#year').textContent = new Date().getFullYear();

    /* ---------- Video de fondo: usa el tuyo, si no existe cae al de muestra ---------- */
    $$('video[data-fallback]').forEach(function (v) {
        var src = v.querySelector('source');
        if (!src) return;
        src.addEventListener('error', function () {
            var fb = v.getAttribute('data-fallback');
            if (fb && src.getAttribute('src') !== fb) {
                src.setAttribute('src', fb); v.load();
                var p = v.play(); if (p && p.catch) p.catch(function () { });
            }
        });
        var p = v.play(); if (p && p.catch) p.catch(function () { });
    });

    /* Botón play/pausa de la banda de video */
    var playBtn = $('#playBtn');
    if (playBtn) {
        playBtn.addEventListener('click', function () {
            var v = $('.videoband video');
            if (!v) return;
            if (v.paused) { v.play(); playBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h3v14H7zM14 5h3v14h-3z"/></svg>'; }
            else { v.pause(); playBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>'; }
        });
    }

    /* ---------- Logo a prueba de rutas rotas ---------- */
    $$('.logo img').forEach(function (img) {
        img.addEventListener('error', function handler() {
            if (img.src.indexOf('logo-claro') > -1) { img.src = 'IMG/logo.png'; return; }
            img.removeEventListener('error', handler);
            var t = document.createElement('span');
            t.style.cssText = 'font-family:var(--f-display);font-size:1.5rem;letter-spacing:-.02em;color:var(--ink)';
            t.innerHTML = 'Group<b style="color:var(--c1);font-weight:inherit">MTS</b>';
            if (img.parentNode) img.replaceWith(t);
        });
    });

    /* ---------- Nav: pegajosa, se esconde al bajar, resalta sección activa ---------- */
    var nav = $('#nav'), lastY = 0;
    var links = $$('#navLinks a');

    /* Relevo de letras: duplica el texto de cada enlace dentro de un contenedor
       con overflow oculto. La copia de abajo sube al pasar el mouse.
       El texto sale de data-es-text / data-en, para que sirva en los dos idiomas. */
    function buildRolls() {
        links.forEach(function (a) {
            var t = (LANG === 'en' ? a.getAttribute('data-en') : a.getAttribute('data-es-text')) || '';
            var roll = document.createElement('span');
            roll.className = 'roll';
            var one = document.createElement('span'); one.textContent = t;
            var two = document.createElement('span'); two.textContent = t;
            two.setAttribute('aria-hidden', 'true');
            roll.appendChild(one); roll.appendChild(two);
            a.textContent = ''; a.appendChild(roll);
        });
    }

    /* Pildora deslizante: sigue al mouse y, al salir, vuelve a la seccion activa. */
    var pill = $('#navPill'), navLinksBox = $('#navLinks'), overNav = false;
    function movePill(el) {
        if (!pill || !el) return;
        pill.style.width = (el.offsetWidth + 28) + 'px';
        pill.style.left = (el.offsetLeft - 14) + 'px';
        pill.style.opacity = '1';
    }
    function restPill() {
        if (!pill) return;
        var act = navLinksBox.querySelector('a.active');
        if (act) movePill(act); else pill.style.opacity = '0';
    }
    if (pill) {
        links.forEach(function (a) { a.addEventListener('mouseenter', function () { overNav = true; movePill(a); }); });
        navLinksBox.addEventListener('mouseleave', function () { overNav = false; restPill(); });
        window.addEventListener('resize', restPill, { passive: true });
    }
    function navScroll() {
        var y = window.scrollY;
        nav.classList.toggle('is-stuck', y > 40);
        nav.classList.toggle('is-hidden', y > 420 && y > lastY && !document.body.classList.contains('menu-open'));
        lastY = y;
    }

    /* ---------- Barra de progreso ---------- */
    var bar = $('#progress');
    function progress() {
        var h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = 'scaleX(' + (h > 0 ? Math.min(1, window.scrollY / h) : 0) + ')';
    }

    /* ---------- Parallax ---------- */
    var pxItems = $$('[data-parallax]');
    function parallax() {
        if (reduce) return;
        var vh = window.innerHeight;
        pxItems.forEach(function (el) {
            var r = el.getBoundingClientRect();
            if (r.bottom < -200 || r.top > vh + 200) return;
            var mid = r.top + r.height / 2 - vh / 2;
            el.style.transform = 'translate3d(0,' + (mid * parseFloat(el.dataset.parallax)).toFixed(1) + 'px,0)';
        });
    }

    /* Hero: el contenido se desvanece y sube al hacer scroll */
    var heroInner = $('#heroInner');
    function heroFade() {
        if (reduce) return;
        var y = window.scrollY, vh = window.innerHeight;
        if (y > vh) return;
        var t = Math.min(1, y / (vh * .85));
        heroInner.style.transform = 'translate3d(0,' + (t * -70).toFixed(1) + 'px,0)';
        heroInner.style.opacity = (1 - t * 1.15).toFixed(3);
    }

    /* ---------- Bucle de scroll con rAF ---------- */
    var ticking = false;
    function onScroll() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () {
            navScroll(); progress(); parallax(); heroFade();
            ticking = false;
        });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();

    /* ---------- Entrada del hero ---------- */
    requestAnimationFrame(function () { $('#hero').classList.add('ready'); });

    /* ---------- Menú móvil ---------- */
    var burger = $('#burger'), drawer = $('#drawer');
    function setMenu(open) {
        document.body.classList.toggle('menu-open', open);
        document.body.style.overflow = open ? 'hidden' : '';
        burger.setAttribute('aria-expanded', open ? 'true' : 'false');
        burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    }
    burger.addEventListener('click', function () { setMenu(!document.body.classList.contains('menu-open')); });
    drawer.addEventListener('click', function (e) { if (e.target.tagName === 'A') setMenu(false); });

    /* ---------- Revelado + scrollspy ---------- */
    if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (en) {
            en.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
        }, { threshold: .14, rootMargin: '0px 0px -8% 0px' });
        $$('.reveal, .mask').forEach(function (el) { io.observe(el); });

        var spy = new IntersectionObserver(function (en) {
            en.forEach(function (e) {
                if (!e.isIntersecting) return;
                links.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id); });
                if (!overNav) restPill();
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        ['servicios', 'transformacion', 'proceso', 'materiales', 'trabajos', 'contacto'].forEach(function (id) {
            var s = document.getElementById(id); if (s) spy.observe(s);
        });
    } else {
        $$('.reveal, .mask').forEach(function (el) { el.classList.add('in'); });
    }

    /* ---------- Contadores ---------- */
    var counters = $$('[data-count]');
    function sfx(el) {
        if (LANG === 'en') return el.getAttribute('data-suffix-en') || el.getAttribute('data-suffix') || '';
        return el.getAttribute('data-suffix') || '';
    }
    function refreshCounters() {
        counters.forEach(function (el) {
            if (el.dataset.done) el.textContent = el.dataset.count + sfx(el);
        });
    }
    function runCounters() {
        counters.forEach(function (el) {
            var target = parseFloat(el.dataset.count);
            if (reduce) { el.textContent = target + sfx(el); el.dataset.done = '1'; return; }
            var t0 = null, dur = 1600;
            function step(ts) {
                if (t0 === null) t0 = ts;
                var p = Math.min(1, (ts - t0) / dur);
                var eased = 1 - Math.pow(1 - p, 3);
                el.textContent = Math.round(target * eased) + sfx(el);
                if (p < 1) requestAnimationFrame(step); else el.dataset.done = '1';
            }
            requestAnimationFrame(step);
        });
    }
    if ('IntersectionObserver' in window) {
        var cio = new IntersectionObserver(function (en) {
            if (en[0].isIntersecting) { runCounters(); cio.disconnect(); }
        }, { threshold: .4 });
        cio.observe($('#trust'));
    } else { runCounters(); }

    /* ---------- Cursor + hover magnético + luz en tarjetas ---------- */
    var fine = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
    if (fine && !reduce) {
        var cur = $('.cursor'), dot = $('.cursor-dot');
        var cx = 0, cy = 0, tx = 0, ty = 0;
        document.addEventListener('mousemove', function (e) {
            tx = e.clientX; ty = e.clientY;
            dot.style.transform = 'translate(' + tx + 'px,' + ty + 'px)';
            document.body.classList.add('cursor-on');
        });
        (function loop() {
            cx += (tx - cx) * .16; cy += (ty - cy) * .16;
            cur.style.transform = 'translate(' + cx.toFixed(2) + 'px,' + cy.toFixed(2) + 'px)';
            requestAnimationFrame(loop);
        })();
        $$('a, button, .shot, summary, .ba').forEach(function (el) {
            el.addEventListener('mouseenter', function () { document.body.classList.add('cursor-hot'); });
            el.addEventListener('mouseleave', function () { document.body.classList.remove('cursor-hot'); });
        });

        $$('[data-magnetic]').forEach(function (el) {
            el.addEventListener('mousemove', function (e) {
                var r = el.getBoundingClientRect();
                el.style.transform = 'translate(' + ((e.clientX - r.left - r.width / 2) * .22).toFixed(1) + 'px,' +
                    ((e.clientY - r.top - r.height / 2) * .34).toFixed(1) + 'px)';
            });
            el.addEventListener('mouseleave', function () {
                el.style.transition = 'transform .5s cubic-bezier(.22,.61,.36,1)';
                el.style.transform = '';
                setTimeout(function () { el.style.transition = ''; }, 500);
            });
        });

        $$('[data-spotlight]').forEach(function (el) {
            el.addEventListener('mousemove', function (e) {
                var r = el.getBoundingClientRect();
                el.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%');
                el.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%');
            });
        });
    }

    /* ============================================================
       MARQUESINA — se mueve sola y reacciona al scroll
       Sustituye la animacion CSS por un bucle propio, para poder
       sumarle la velocidad del scroll y cambiar de sentido.
       ============================================================ */
    var mqTrack = $('.marquee__track');
    var mqGroupW = 0, mqX = 0, mqVel = 0, mqHover = false, mqLastY = 0;
    function measureMarquee() {
        if (mqTrack && mqTrack.firstElementChild) mqGroupW = mqTrack.firstElementChild.offsetWidth;
    }
    if (mqTrack) {
        mqTrack.style.animation = 'none';
        measureMarquee();
        mqLastY = window.scrollY;

        var mqBox = mqTrack.parentNode;
        mqBox.addEventListener('mouseenter', function () { mqHover = true; });
        mqBox.addEventListener('mouseleave', function () { mqHover = false; });
        window.addEventListener('resize', measureMarquee, { passive: true });

        (function mqTick() {
            var y = window.scrollY;
            if (!reduce) {
                mqVel += (y - mqLastY) * 0.45; // el scroll la empuja
                mqVel *= 0.90;                 // y se va frenando sola
            }
            mqLastY = y;

            // Con "reducir movimiento" del sistema va mas lenta y sin empujon de scroll,
            // pero no se detiene: es la unica animacion que mantenemos.
            var base = reduce ? 1.1 : (mqHover ? 0.35 : 1.7);
            mqX -= base + mqVel;

            if (mqGroupW > 0) {
                while (mqX <= -mqGroupW) { mqX += mqGroupW; measureMarquee(); }
                while (mqX > 0) { mqX -= mqGroupW; }
            }
            mqTrack.style.transform = 'translate3d(' + mqX.toFixed(2) + 'px,0,0)';
            requestAnimationFrame(mqTick);
        })();
    }

    /* ---------- Antes / después ---------- */
    var ba = $('#ba'), range = $('#baRange');
    if (ba && range) {
        var setPos = function (v) {
            v = Math.max(0, Math.min(100, v));
            ba.style.setProperty('--pos', v + '%');
            range.value = v;
            range.setAttribute('aria-valuetext', Math.round(v) + '%');
        };
        range.addEventListener('input', function () { setPos(parseFloat(range.value)); });
        var dragging = false;
        var fromEvent = function (e) {
            var r = ba.getBoundingClientRect();
            setPos(((e.clientX - r.left) / r.width) * 100);
        };
        ba.addEventListener('pointerdown', function (e) { dragging = true; ba.setPointerCapture(e.pointerId); fromEvent(e); });
        ba.addEventListener('pointermove', function (e) { if (dragging) fromEvent(e); });
        ['pointerup', 'pointercancel'].forEach(function (ev) { ba.addEventListener(ev, function () { dragging = false; }); });
    }

    /* ---------- Galería: fotos de muestra + filtros + lightbox ---------- */
    $$('#gallery img').forEach(function (img) {
        img.addEventListener('error', function handler() {
            var demo = img.getAttribute('data-demo');
            if (demo && img.getAttribute('src') !== demo) { img.setAttribute('src', demo); return; }
            img.removeEventListener('error', handler);
            var ph = document.createElement('div');
            ph.className = 'ph';
            ph.textContent = LANG === 'en' ? 'Add your photo here' : 'Añade tu foto aquí';
            if (img.parentNode) img.replaceWith(ph);
        });
    });

    var shots = $$('#gallery .shot');
    $$('.filter').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var f = btn.dataset.filter;
            $$('.filter').forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
            shots.forEach(function (s) {
                var show = (f === 'all' || s.dataset.cat === f);
                if (show) {
                    s.classList.remove('hide');
                    s.classList.add('enter');
                    requestAnimationFrame(function () { requestAnimationFrame(function () { s.classList.remove('enter'); }); });
                } else {
                    s.classList.add('hide');
                }
            });
        });
    });

    var lb = $('#lb'), lbImg = $('#lbImg'), lbCap = $('#lbCap'), lbCount = $('#lbCount');
    var idx = 0, lastFocus = null;
    function visibleShots() { return shots.filter(function (s) { return !s.classList.contains('hide'); }); }
    function show(i) {
        var list = visibleShots();
        if (!list.length) return;
        idx = (i + list.length) % list.length;
        var s = list[idx], im = s.querySelector('img');
        lbImg.src = im ? im.currentSrc || im.src : '';
        lbImg.alt = im ? im.alt : '';
        lbCap.textContent = s.querySelector('figcaption').textContent;
        lbCount.textContent = (idx + 1) + ' / ' + list.length;
    }
    function openLb(s) {
        lastFocus = document.activeElement;
        show(visibleShots().indexOf(s));
        lb.classList.add('open');
        document.body.style.overflow = 'hidden';
        $('#lbClose').focus();
    }
    function closeLb() {
        lb.classList.remove('open');
        document.body.style.overflow = '';
        if (lastFocus) lastFocus.focus();
    }
    shots.forEach(function (s) {
        s.addEventListener('click', function () { if (s.querySelector('img')) openLb(s); });
        s.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); if (s.querySelector('img')) openLb(s); }
        });
    });
    $('#lbClose').addEventListener('click', closeLb);
    $('#lbPrev').addEventListener('click', function () { show(idx - 1); });
    $('#lbNext').addEventListener('click', function () { show(idx + 1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { closeLb(); setMenu(false); }
        if (!lb.classList.contains('open')) return;
        if (e.key === 'ArrowLeft') show(idx - 1);
        if (e.key === 'ArrowRight') show(idx + 1);
    });

    /* ---------- Carrusel de testimonios ---------- */
    var car = $('#carousel');
    if (car) {
        var step = function () { var q = car.querySelector('.quote'); return q ? q.offsetWidth + 18 : 320; };
        $('#carPrev').addEventListener('click', function () { carGo(-1); carStart(); });
        $('#carNext').addEventListener('click', function () { carGo(1); carStart(); });
        /* Avanza solo cada 4.5 s. Se detiene al pasar el mouse, al arrastrar
           y al usar el teclado, y se reanuda cuando el visitante se va. */
        var carTimer = null;
        function carGo(dir) {
            var max = car.scrollWidth - car.clientWidth;
            if (dir > 0 && car.scrollLeft >= max - 6) car.scrollTo({ left: 0, behavior: 'smooth' });
            else car.scrollBy({ left: dir * step(), behavior: 'smooth' });
        }
        function carStop() { if (carTimer) { clearInterval(carTimer); carTimer = null; } }
        function carStart() { carStop(); carTimer = setInterval(function () { carGo(1); }, 4500); }
        ['mouseenter', 'pointerdown', 'focusin'].forEach(function (ev) { car.addEventListener(ev, carStop); });
        ['mouseleave', 'focusout'].forEach(function (ev) { car.addEventListener(ev, carStart); });
        document.addEventListener('visibilitychange', function () { document.hidden ? carStop() : carStart(); });
        carStart();

        var down = false, startX = 0, startL = 0, moved = 0;
        car.addEventListener('pointerdown', function (e) {
            down = true; moved = 0; startX = e.clientX; startL = car.scrollLeft;
            car.classList.add('dragging');
        });
        car.addEventListener('pointermove', function (e) {
            if (!down) return;
            var d = e.clientX - startX;
            moved = Math.abs(d);
            car.scrollLeft = startL - d;
        });
        ['pointerup', 'pointerleave', 'pointercancel'].forEach(function (ev) {
            car.addEventListener(ev, function () { down = false; car.classList.remove('dragging'); });
        });
    }

    /* ---------- Arranque del idioma ---------- */
    $$('.lang').forEach(function (b) {
        b.addEventListener('click', function () {
            applyLang(LANG === 'en' ? 'es' : 'en');
            setMenu(false);
        });
    });
    applyLang(LANG);
})();
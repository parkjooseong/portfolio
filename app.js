(() => {
  'use strict';
  const viewer = document.querySelector('#image-viewer');
  if (viewer && typeof viewer.showModal === 'function') {
    const image = viewer.querySelector('.viewer-image');
    const title = viewer.querySelector('#viewer-caption');
    const original = viewer.querySelector('.viewer-original');
    const close = viewer.querySelector('.viewer-close');
    let opener;
    document.querySelectorAll('[data-lightbox]').forEach(link => {
      link.addEventListener('click', event => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        opener = link;
        image.src = link.href;
        image.alt = link.querySelector('img')?.alt || link.dataset.caption;
        title.textContent = link.dataset.caption || image.alt;
        original.href = link.href;
        viewer.showModal();
        document.body.classList.add('modal-open');
        close.focus();
      });
    });
    close.addEventListener('click', () => viewer.close());
    viewer.addEventListener('click', event => {
      if (event.target === viewer || event.target.classList.contains('viewer-stage')) viewer.close();
    });
    viewer.addEventListener('close', () => {
      document.body.classList.remove('modal-open');
      opener?.focus({ preventScroll: true });
    });
    viewer.addEventListener('keydown', event => {
      if (event.key !== 'Tab') return;
      if (event.shiftKey && document.activeElement === original) {
        event.preventDefault(); close.focus();
      } else if (!event.shiftKey && document.activeElement === close) {
        event.preventDefault(); original.focus();
      }
    });
  }

  const button = document.querySelector('[data-copy-email]');
  const address = document.querySelector('.email-link');
  const status = document.querySelector('#copy-status');
  if (button && address && status) {
    button.hidden = false;
    button.addEventListener('click', async () => {
      const email = address.getAttribute('href').slice(7);
      try {
        if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(email);
        status.textContent = '이메일 주소를 복사했습니다.';
      } catch {
        const node = address.querySelector('.link-label')?.firstChild || [...address.childNodes].find(child => child.nodeType === Node.TEXT_NODE);
        const range = document.createRange();
        range.setStart(node, 0); range.setEnd(node, email.length);
        const selection = window.getSelection();
        selection.removeAllRanges(); selection.addRange(range);
        status.textContent = '주소를 선택했습니다. Ctrl+C 또는 길게 눌러 복사해 주세요.';
      }
    });
  }

  // Motion is an optional enhancement; the journal stays readable without it.
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.matchMedia().add('(min-width: 851px) and (prefers-reduced-motion: no-preference)', () => {
      document.querySelectorAll('.case-figure').forEach(figure => {
        gsap.fromTo(figure, { y: 18 }, {
          y: 0, ease: 'none',
          scrollTrigger: { trigger: figure, start: 'top 96%', end: 'top 64%', scrub: .5 }
        });
      });
    });
    window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
    document.querySelectorAll('details').forEach(detail => {
      detail.addEventListener('toggle', () => ScrollTrigger.refresh());
    });
  }
})();

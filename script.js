/* ═══════════════════════════════════════════════════════════════
   FillsGood Website — Interactions & Animations
   ═══════════════════════════════════════════════════════════════ */

/* ── Navbar scroll effect ──────────────────────────────────────── */
const navbar = document.getElementById('navbar');

function updateNavbar() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();


/* ── Mobile burger menu ─────────────────────────────────────────── */
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');

burger.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');

  if (isOpen) {
    mobileMenu.classList.add('hidden');
    burger.classList.remove('open');
  } else {
    mobileMenu.classList.remove('hidden');
    burger.classList.add('open');
  }
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    burger.classList.remove('open');
  });
});


/* ── Scroll Reveal (Intersection Observer) ─────────────────────── */
const revealElements = document.querySelectorAll('.reveal-up');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Respect staggered animation-delay set inline
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  }
);

revealElements.forEach(el => revealObserver.observe(el));


/* ── Smooth scroll for all anchor links ────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();

    const navHeight = navbar.offsetHeight;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;

    window.scrollTo({
      top: targetTop,
      behavior: 'smooth',
    });
  });
});


/* ── Lazy load images ───────────────────────────────────────────── */
if ('loading' in HTMLImageElement.prototype) {
  // Native lazy loading supported — already handled via loading="lazy" attribute
} else {
  // Fallback for older browsers
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  const imageObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
        }
        imageObserver.unobserve(img);
      }
    });
  });
  lazyImages.forEach(img => imageObserver.observe(img));
}


/* ── Parallax on hero mockup ────────────────────────────────────── */
const heroMockup = document.querySelector('.hero-mockup');

if (heroMockup && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY < window.innerHeight) {
      // Parallax: mockup moves at 15% of scroll speed (effet de profondeur)
      heroMockup.style.transform = `translateY(${scrollY * 0.15}px)`;
    }
  }, { passive: true });
}

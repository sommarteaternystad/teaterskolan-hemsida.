const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
@media (max-width: 820px) {
  .menu-toggle {
    display: inline-flex;
    margin-top: 6px;
    margin-bottom: 14px;
  }

  .site-nav {
    display: none;
    position: static;
    background: transparent;
    border: none;
    box-shadow: none;
    padding: 0;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .site-nav.open {
    display: flex;
  }

  .site-nav-centered a {
    width: 100%;
    max-width: 320px;
    justify-content: center;
    text-align: center;
    color: #ffffff;
  }

  .intro-grid,
  .two-col,
  .cta-box,
  .footer-wrap {
    grid-template-columns: 1fr;
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 640px) {
  .site-header-large {
    min-height: 280px;
  }

  .site-header-inner {
    padding: 28px 0 62px;
  }

  .site-header::after {
    bottom: -30px;
    height: 60px;
    left: -5%;
    right: -5%;
  }

  .brand-logo-large {
    width: 96px;
    height: 96px;
  }

  .brand-centered .brand-title {
    font-size: 32px;
  }

  .brand-centered .brand-subtitle {
    font-size: 13px;
  }

  .hero {
    min-height: auto;
  }

  .hero-content {
    padding: 70px 0 54px;
  }

  h1 {
    font-size: 40px;
    line-height: 0.98;
  }

  h2 {
    font-size: 32px;
  }

  .hero-text {
    font-size: 16px;
  }

  .hero-actions,
  .course-grid,
  .group-grid,
  .stats-grid,
  .level-grid-3,
  .level-grid-2 {
    grid-template-columns: 1fr;
    display: grid;
  }

  .btn {
    width: 100%;
  }

  .panel,
  .course-card,
  .group-card,
  .cta-box,
  .stat-card,
  .info-panel,
  .level-block {
    padding: 22px;
  }

  .section {
    padding: 64px 0;
  }

  .level-header {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-bottom: 18px;
  }

  .level-step {
    width: 78px;
    height: 44px;
    border-radius: 14px;
  }

  .level-header h3 {
    font-size: 24px;
  }

  .level-grid-3 a:last-child {
    grid-column: auto;
  }

  .course-levels .course-card {
    min-height: auto;
  }

  .course-levels .course-card h3 {
    font-size: 24px;
  }
}

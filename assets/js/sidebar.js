const sidebar = document.querySelector('.page-sidebar');
const sidebarHead = sidebar?.querySelector('.page-sidebar__head');
const sidebarNav = sidebar?.querySelector('nav');

if (sidebar && sidebarHead && sidebarNav) {
  sidebarNav.id = 'project-page-links';

  const headingText = sidebarHead.textContent.trim();
  const mobileLayout = window.matchMedia('(max-width: 800px)');
  const toggle = document.createElement('button');
  toggle.className = 'page-sidebar__toggle';
  toggle.type = 'button';
  toggle.textContent = headingText;
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', sidebarNav.id);

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    sidebar.classList.toggle('is-open', !expanded);
  });

  const updateSidebarHeading = () => {
    if (mobileLayout.matches) {
      sidebarHead.replaceChildren(toggle);
    } else {
      sidebarHead.replaceChildren(headingText);
      sidebar.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  };

  mobileLayout.addEventListener('change', updateSidebarHeading);
  updateSidebarHeading();
}

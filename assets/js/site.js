(() => {
  'use strict';

  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const systemTheme = matchMedia('(prefers-color-scheme: dark)');
  let explicitTheme = false;
  try { explicitTheme = ['light', 'dark'].includes(localStorage.getItem('flores-theme')); } catch (_) {}

  function applyTheme(theme) {
    root.dataset.theme = theme;
    const label = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`;
    themeButton.setAttribute('aria-label', label);
    themeButton.title = label;
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#111b19' : '#f8f9f5';
  }

  applyTheme(root.dataset.theme);
  themeButton.hidden = false;
  themeButton.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    explicitTheme = true;
    applyTheme(next);
    try { localStorage.setItem('flores-theme', next); } catch (_) {}
  });
  systemTheme.addEventListener('change', event => {
    if (!explicitTheme) applyTheme(event.matches ? 'dark' : 'light');
  });

  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.main-nav');
  menuButton.hidden = false;
  root.classList.add('js');

  function closeMenu(restoreFocus = false) {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    if (restoreFocus) menuButton.focus();
  }

  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    navigation.classList.toggle('is-open', open);
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true);
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) closeMenu();
  });
  matchMedia('(min-width: 901px)').addEventListener('change', event => {
    if (event.matches) closeMenu();
  });

  function createElement(tag, className, text) {
    const element = document.createElement(tag);
    element.className = className;
    if (text) element.textContent = text;
    return element;
  }

  function profile(person, speaker = false) {
    const hasWebpage = person.url && /^https?:\/\//i.test(person.url);
    const linkToWebpage = element => {
      element.href = person.url;
      element.target = '_blank';
      element.rel = 'noopener noreferrer';
      element.setAttribute('aria-label', `${person.name}’s webpage (opens in a new tab)`);
      return element;
    };
    const card = createElement('article', `person-card${speaker ? ' speaker-card' : ''}`);
    const portrait = createElement(hasWebpage ? 'a' : 'div', `portrait ${person.color || 'teal'}`);
    if (hasWebpage) linkToWebpage(portrait);
    const photo = document.createElement('img');
    const placeholder = 'assets/images/person-placeholder.svg';
    const isPlaceholder = !person.image || person.image === placeholder;
    photo.src = person.image || placeholder;
    photo.alt = isPlaceholder ? '' : `Portrait of ${person.name}`;
    photo.width = 600;
    photo.height = 600;
    photo.loading = 'lazy';
    photo.style.objectPosition = person.imagePosition || 'center';
    portrait.append(photo);
    const addInitials = () => {
      const initials = createElement('span', 'portrait-initials', person.initials);
      initials.setAttribute('aria-hidden', 'true');
      portrait.append(initials);
    };
    if (isPlaceholder) addInitials();
    else photo.addEventListener('error', () => {
      photo.src = placeholder;
      photo.alt = '';
      addInitials();
    }, { once: true });

    const information = createElement('div', 'person-info');
    const heading = createElement('h4', 'person-name');
    if (hasWebpage) heading.append(linkToWebpage(createElement('a', 'person-name-link', person.name)));
    else heading.textContent = person.name;
    information.append(heading, createElement('p', 'affiliation', person.affiliation));
    if (speaker && person.description) information.append(createElement('p', 'speaker-description', person.description));
    if (!hasWebpage) {
      information.append(createElement('span', 'profile-pending', 'Webpage forthcoming'));
    }
    card.append(portrait, information);
    return card;
  }

  const people = window.FLORES_PEOPLE || { speakers: [], organizers: [] };
  people.speakers.forEach(person => document.querySelector('#speaker-grid').append(profile(person, true)));
  people.organizers.forEach(person => document.querySelector('#organizer-grid').append(profile(person)));

  // Indicate the section currently being read without changing keyboard focus.
  const links = [...navigation.querySelectorAll('a')];
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        links.forEach(link => {
          if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
    links.forEach(link => {
      const section = document.querySelector(link.hash);
      if (section) observer.observe(section);
    });
  }
})();

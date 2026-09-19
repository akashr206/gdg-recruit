import navbarHtml from './components/Navbar.html?raw'
import heroHtml from './components/Hero.html?raw'
import missionHtml from './components/Mission.html?raw'
import squadsHtml from './components/Squads.html?raw'
import faqHtml from './components/FAQ.html?raw'
import footerHtml from './components/Footer.html?raw'
import modalHtml from './components/Modal.html?raw'
import { initInteractions } from './scripts/interactions.js'

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('navbar-root').innerHTML = navbarHtml;
  document.getElementById('hero-root').innerHTML = heroHtml;
  document.getElementById('mission-root').innerHTML = missionHtml;
  document.getElementById('squads-root').innerHTML = squadsHtml;
  document.getElementById('faq-root').innerHTML = faqHtml;
  document.getElementById('footer-root').innerHTML = footerHtml;
  document.getElementById('modal-root').innerHTML = modalHtml;

  initInteractions();

  if (window.lucide) {
    window.lucide.createIcons();
  }
});

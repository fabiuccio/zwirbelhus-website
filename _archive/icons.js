/* Zwirbelhus icon sprite — injects a hidden SVG <symbol> set.
   Use: <svg class="ic"><use href="#ic-heart"></use></svg>
   Icons are simple, rounded, single-stroke (currentColor). */
(function () {
  const NS = 'http://www.w3.org/2000/svg';
  const icons = {
    // structure: viewBox 0 0 24 24, stroke currentColor 1.8, round caps/joins
    'house': '<path d="M4 11.2 12 4.5l8 6.7M6 9.8V19a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9.8"/><path d="M10.2 20v-4.2a1.8 1.8 0 0 1 3.6 0V20"/>',
    'heart': '<path d="M12 20s-6.5-4.2-8.4-8.1C2.2 9.1 3.6 6 6.6 6c1.9 0 3 1.2 3.7 2.2.4.6 1 .6 1.4 0C12.4 7.2 13.5 6 15.4 6c3 0 4.4 3.1 3 5.9C16.5 15.8 12 20 12 20Z"/>',
    'sun': '<circle cx="12" cy="12" r="4"/><path d="M12 2.6v2.2M12 19.2v2.2M21.4 12h-2.2M4.8 12H2.6M18.6 5.4l-1.6 1.6M7 17l-1.6 1.6M18.6 18.6 17 17M7 7 5.4 5.4"/>',
    'cloud': '<path d="M7 18h9.5a3.5 3.5 0 0 0 .3-7 5 5 0 0 0-9.6-1.2A3.9 3.9 0 0 0 7 18Z"/>',
    'star': '<path d="M12 4.2l2.2 4.6 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5L5.2 9.5l5-.7Z"/>',
    'leaf': '<path d="M5 19c0-7 5-12 14-12 0 9-5 14-12 14a6 6 0 0 1-2-.4"/><path d="M9 15c2.5-2.5 5-3.5 8-4.2"/>',
    'balloon': '<path d="M12 14c3 0 5-2.4 5-5.6S15 3 12 3 7 5.2 7 8.4 9 14 12 14Z"/><path d="M12 14v1.5M11 17c0 .8 2 .8 2 1.6S11 20 11 20.8"/>',
    'smile': '<circle cx="12" cy="12" r="8.4"/><circle cx="9.2" cy="10" r=".7" fill="currentColor" stroke="none"/><circle cx="14.8" cy="10" r=".7" fill="currentColor" stroke="none"/><path d="M8.8 14c.8 1.2 2 1.9 3.2 1.9s2.4-.7 3.2-1.9"/>',
    'book': '<path d="M12 6.4C10.6 5.2 8.6 4.6 6 4.6c-.7 0-1.3.6-1.3 1.3v11c0 .7.6 1.2 1.3 1.2 2.6 0 4.6.6 6 1.8M12 6.4c1.4-1.2 3.4-1.8 6-1.8.7 0 1.3.6 1.3 1.3v11c0 .7-.6 1.2-1.3 1.2-2.6 0-4.6.6-6 1.8M12 6.4V20"/>',
    'music': '<path d="M9 18.2V7l9-2v9.4"/><circle cx="6.6" cy="18.2" r="2.4"/><circle cx="15.6" cy="16.4" r="2.4"/>',
    'cup': '<path d="M5.5 8h11v5a5.5 5.5 0 0 1-11 0Z"/><path d="M16.5 9.2h1.8a2 2 0 0 1 0 4h-1.4M5.5 20h11"/>',
    'moon': '<path d="M19 14.6A7.5 7.5 0 0 1 9.4 5 7.5 7.5 0 1 0 19 14.6Z"/>',
    'sparkle': '<path d="M12 3.5c.6 3.6 1.9 4.9 5.5 5.5-3.6.6-4.9 1.9-5.5 5.5-.6-3.6-1.9-4.9-5.5-5.5 3.6-.6 4.9-1.9 5.5-5.5Z"/><path d="M18.5 14.5c.3 1.6.9 2.2 2.5 2.5-1.6.3-2.2.9-2.5 2.5-.3-1.6-.9-2.2-2.5-2.5 1.6-.3 2.2-.9 2.5-2.5Z"/>',
    'mail': '<rect x="3.5" y="5.5" width="17" height="13" rx="2.4"/><path d="M4.5 7.5 12 12.5l7.5-5"/>',
    'phone': '<path d="M6.5 4.5h3l1.2 3.4-1.7 1.3a10 10 0 0 0 4.8 4.8l1.3-1.7 3.4 1.2v3a1.5 1.5 0 0 1-1.6 1.5C11.2 21.2 5 15 4.9 7a1.5 1.5 0 0 1 1.6-1.5Z"/>',
    'clock': '<circle cx="12" cy="12" r="8.4"/><path d="M12 7.6V12l3 1.8"/>',
    'pin': '<path d="M12 21c4-4.2 6-7.4 6-10.2A6 6 0 0 0 6 10.8C6 13.6 8 16.8 12 21Z"/><circle cx="12" cy="10.6" r="2.2"/>',
    'check': '<path d="M5 12.5 10 17.5 19 6.5"/>',
    'arrow': '<path d="M5 12h13M13 6.5 18.5 12 13 17.5"/>',
    'instagram': '<rect x="4.2" y="4.2" width="15.6" height="15.6" rx="4.6"/><circle cx="12" cy="12" r="3.6"/><circle cx="16.6" cy="7.4" r=".9" fill="currentColor" stroke="none"/>',
    'palette': '<path d="M12 4.2c4.6 0 8 3 8 6.8 0 2.6-2 3.4-3.6 3.4h-1.6c-1 0-1.7.8-1.7 1.7 0 .4.2.8.2 1.2 0 1-.8 1.7-1.8 1.7-4.4 0-7.7-3.6-7.7-8 0-4.6 3.8-6.8 8.2-6.8Z"/><circle cx="8.6" cy="11" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="8.6" r="1" fill="currentColor" stroke="none"/><circle cx="15.4" cy="11" r="1" fill="currentColor" stroke="none"/>',
    'type': '<path d="M5 6.5h14M12 6.5V18M9 18h6"/>',
    'shapes': '<circle cx="8" cy="8.5" r="3.6"/><rect x="13" y="13" width="7" height="7" rx="2"/><path d="M8 13.4 11.4 19.5H4.6Z"/>',
    'puzzle': '<path d="M9.5 5.5a1.5 1.5 0 0 1 3 0c0 .5-.2.9-.2 1.3 0 .5.4.7.9.7H15a1 1 0 0 1 1 1v1.8c0 .5.2.9.7.9.4 0 .8-.2 1.3-.2a1.5 1.5 0 0 1 0 3c-.5 0-.9-.2-1.3-.2-.5 0-.7.4-.7.9V18a1 1 0 0 1-1 1h-2.3c-.5 0-.9-.4-.9-.9 0-.4.2-.8.2-1.3a1.5 1.5 0 0 0-3 0c0 .5.2.9.2 1.3 0 .5-.4.9-.9.9H6a1 1 0 0 1-1-1v-2.3c0-.5-.4-.7-.9-.7-.4 0-.8.2-1.3.2"/>',
  };
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('aria-hidden', 'true');
  svg.style.position = 'absolute';
  svg.style.width = '0';
  svg.style.height = '0';
  svg.style.overflow = 'hidden';
  let markup = '';
  for (const [name, body] of Object.entries(icons)) {
    markup += `<symbol id="ic-${name}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${body}</symbol>`;
  }
  svg.innerHTML = markup;
  if (document.body) document.body.insertBefore(svg, document.body.firstChild);
  else document.addEventListener('DOMContentLoaded', () => document.body.insertBefore(svg, document.body.firstChild));
  // default sizing helper class
  const style = document.createElement('style');
  style.textContent = '.ic{width:1.4em;height:1.4em;display:inline-block;vertical-align:middle;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}';
  document.head.appendChild(style);
})();

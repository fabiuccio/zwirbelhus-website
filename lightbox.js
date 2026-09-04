(function () {
  const selector = '.masonry img, .gallery img, .alltag-preview img';
  const photos = Array.from(document.querySelectorAll(selector));
  if (!photos.length || typeof HTMLDialogElement === 'undefined') return;

  const dialog = document.createElement('dialog');
  dialog.className = 'photo-lightbox';
  dialog.setAttribute('aria-label', 'Fotogalerie');
  dialog.innerHTML = `
    <button class="photo-lightbox__button photo-lightbox__close" type="button" aria-label="Galerie schliessen">&times;</button>
    <div class="photo-lightbox__stage">
      <button class="photo-lightbox__button photo-lightbox__prev" type="button" aria-label="Vorheriges Foto">&#8249;</button>
      <figure class="photo-lightbox__figure">
        <img class="photo-lightbox__image" alt="">
        <figcaption class="photo-lightbox__caption"></figcaption>
      </figure>
      <button class="photo-lightbox__button photo-lightbox__next" type="button" aria-label="Nächstes Foto">&#8250;</button>
      <div class="photo-lightbox__counter" aria-live="polite"></div>
    </div>`;
  document.body.appendChild(dialog);

  const fullImage = dialog.querySelector('.photo-lightbox__image');
  const caption = dialog.querySelector('.photo-lightbox__caption');
  const counter = dialog.querySelector('.photo-lightbox__counter');
  let currentIndex = 0;

  function showPhoto(index) {
    currentIndex = (index + photos.length) % photos.length;
    const photo = photos[currentIndex];
    fullImage.src = photo.currentSrc || photo.src;
    fullImage.alt = photo.alt || '';
    caption.textContent = photo.alt || '';
    counter.textContent = `${currentIndex + 1} / ${photos.length}`;
  }

  function openPhoto(index) {
    showPhoto(index);
    dialog.showModal();
  }

  photos.forEach((photo, index) => {
    photo.tabIndex = 0;
    photo.setAttribute('role', 'button');
    photo.setAttribute('aria-label', `${photo.alt || 'Foto'} vergrössern`);
    photo.addEventListener('click', () => openPhoto(index));
    photo.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openPhoto(index);
      }
    });
  });

  dialog.querySelector('.photo-lightbox__close').addEventListener('click', () => dialog.close());
  dialog.querySelector('.photo-lightbox__prev').addEventListener('click', () => showPhoto(currentIndex - 1));
  dialog.querySelector('.photo-lightbox__next').addEventListener('click', () => showPhoto(currentIndex + 1));
  dialog.addEventListener('click', event => {
    if (!event.target.closest('.photo-lightbox__image, .photo-lightbox__button')) dialog.close();
  });
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') showPhoto(currentIndex - 1);
    if (event.key === 'ArrowRight') showPhoto(currentIndex + 1);
  });
})();

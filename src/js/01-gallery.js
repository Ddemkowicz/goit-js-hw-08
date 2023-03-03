// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

for (let i = 0; i < galleryItems.length; i++) {
  const image = document.createElement('img');
  image.classList = 'gallery__image';
  image.src = galleryItems[i].preview;
  image.alt = galleryItems[i].description;

  const link = document.createElement('a');
  link.classList = 'gallery__item';
  link.href = galleryItems[i].original;

  link.append(image);
  gallery.append(link);

  link.addEventListener('click', e => {
    e.preventDefault();

    // instance.show();

    document.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        instance.close();
      }
    });
  });
}
let lightbox = new SimpleLightbox('.gallery a', {
  navText: ['←', '→'],
  captions: true,
  captionsSelector: 'img',
  captionsType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const imageElements = [];


galleryItems.forEach(imageElement => {
   const link = document.createElement('a');
   link.classList.add('gallery__item');
   link.href = imageElement.original;

   const image = document.createElement('img');
   image.classList.add('gallery__image');
   image.src = imageElement.preview;
//    image.dataset.source = imageElement.original;
   image.alt = imageElement.description;

   link.appendChild(image);

   imageElements.push(link);
});

galleryContainer.append(...imageElements);

let lightbox = new SimpleLightbox('.gallery a', { caption: true, captionSelector: 'img[alt]', captionType: 'attr', captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 }); 


console.log(galleryItems);

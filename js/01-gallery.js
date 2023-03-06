import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const imageElements = [];


galleryItems.forEach(imageElement => {
   const container = document.createElement('div');
   container.classList.add('gallery__item');

   const link = document.createElement('a');
   link.classList.add('gallery__link');
   link.href = imageElement.original;

   const image = document.createElement('img');
   image.classList.add('gallery__image');
   image.src = imageElement.preview;
   image.dataset.source = imageElement.original;
   image.alt = imageElement.description;

   link.appendChild(image);

   container.appendChild(link);

   imageElements.push(container);
});

galleryContainer.append(...imageElements);

galleryContainer.addEventListener('click', onLinkClick);

const instance = basicLightbox.create(`<img width="1140" height="720" src="#">`, {onShow: (instance) => {window.addEventListener('keydown', onEscPress)},
onClose: (instance) => {window.removeEventListener('keydown', onEscPress)}});

function onLinkClick(event) {
  event.preventDefault();
  instance.element().querySelector('img').src = event.target.dataset.source;
  instance.show(); 
}

function onEscPress(event) {
 if(event.code === "Escape") {
  instance.close();
 }
}

console.log(galleryItems);
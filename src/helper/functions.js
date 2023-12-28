// Функція для додавання зображення
export const addImage = () => {
  const imageContainer = document.querySelector('#myImage');
  if (!imageContainer) return;

  const newImage = document.createElement('img');
  newImage.id = 'myImage';
  newImage.src = imageContainer.src.split('/')[imageContainer.src.split('/').length - 1] === 'photo_2022-10-05_14-17-41.jpg' ? 'london.jpg' : 'photo_2022-10-05_14-17-41.jpg';
  newImage.alt = 'Oops';
  imageContainer.parentNode.replaceChild(newImage, imageContainer);
}

// Функція для збільшення розміру зображення
export const increaseImageSize = () => {
  const image = document.getElementById('myImage');
  if (image) {
    const currentWidth = image.clientWidth;
    const currentHeight = image.clientHeight;
    image.style.width = `${currentWidth * 1.2}px`;
    image.style.height = `${currentHeight * 1.2}px`;
  }
}

// Функція для зменшення розміру зображення
export const decreaseImageSize = () => {
  const image = document.getElementById('myImage');
  if (image) {
    const currentWidth = image.clientWidth;
    const currentHeight = image.clientHeight;
    image.style.width = `${currentWidth * 0.8}px`;
    image.style.height = `${currentHeight * 0.8}px`;
  }
}

// Функція для видалення зображення
export const deleteImage = () => {
  const image = document.getElementById('myImage');
  if (image) {
    image.parentNode.removeChild(image);
  }
}


import image from '../../images/my-photo.jpg';
import { addImage, increaseImageSize, decreaseImageSize, deleteImage } from '../../helper/functions.js';

export const Image = () => (
  <>
    <a href="https://www.visitlondon.com/" target="_blank">
      <img
        id="myImage"
        src={image}
        alt="Opsy, there is no photo"
      />
    </a>

    <button onClick={addImage}>Додати</button>
    <button onClick={increaseImageSize}>Збільшити</button>
    <button onClick={decreaseImageSize}>Зменшити</button>
    <button onClick={deleteImage}>Видалити</button>
  </>
)
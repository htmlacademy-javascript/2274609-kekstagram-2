import { renderPreview } from './preview-photo.js';
import { getCurrentData } from './full-photo.js';
import { debounce } from './utils.js';

const pictureContainer = document.querySelector('.pictures.container');

const filterContainer = document.querySelector('.img-filters');
const filterBtns = filterContainer.querySelectorAll('.img-filters__button');

const cleanBtn = (btns) => {
  btns.forEach((btn) => {
    btn.classList.remove('img-filters__button--active');
  });
};

const cleanPictureContainer = () => {
  const pictures = pictureContainer.querySelectorAll('.picture');

  pictures.forEach((picture) => {
    picture.remove();
  });
};

const showPhotos = (dataPhotos) => {
  cleanPictureContainer();
  renderPreview(dataPhotos);
  getCurrentData(dataPhotos);
};

const showPhotosDebounce = debounce((data) => showPhotos(data));

const shuffleData = (dataPhotos, count = 10) => {
  const array = [...dataPhotos];
  let randomIndex;

  for (let i = array.length - 1; i > 0; i -= 1) {
    randomIndex = Math.floor(Math.random() * (i + 1));

    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  return array.slice(0, Math.min(count, array.length));
};

const sortMessageAmount = (dataPhotos) => {
  const array = [...dataPhotos];
  const messageAmountSort = (messageA, messageB) => messageB.comments.length - messageA.comments.length;
  const sortArray = array.sort(messageAmountSort);
  return sortArray;
};

const getFilterPhotos = (dataPhotos) => {
  showPhotos(dataPhotos);
  filterContainer.classList.remove('img-filters--inactive');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('img-filters__button--active')) {
        return;
      }

      cleanBtn(filterBtns);
      btn.classList.add('img-filters__button--active');

      switch(btn.id) {
        case ('filter-default'):
          showPhotosDebounce(dataPhotos);
          break;

        case ('filter-random'): {
          const newDataPhotos = shuffleData(dataPhotos);
          showPhotosDebounce(newDataPhotos);
          break;
        }

        case ('filter-discussed'): {
          const newDataPhotos = sortMessageAmount(dataPhotos);
          showPhotosDebounce(newDataPhotos);
          break;
        }
      }
    });
  });
};


export { getFilterPhotos };

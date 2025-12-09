import { renderPreview } from './preview-photo.js';
import { getCurrentData } from './full-photo.js';
import { debounce } from './utils.js';

const pictureContainer = document.querySelector('.pictures.container');

const filterContainer = document.querySelector('.img-filters');
const filterBtns = filterContainer.querySelectorAll('.img-filters__button');

filterContainer.classList.remove('img-filters--inactive');

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
  renderPreview(dataPhotos);
  getCurrentData(dataPhotos);
};

const renderFilterDefault = (dataPhotos) => {
  cleanPictureContainer();
  showPhotos(dataPhotos);
};

const shuffleData = (dataPhotos, count = 10) => {
  const array = [...dataPhotos];
  let randomIndex;

  for (let i = array.length - 1; i > 0; i -= 1) {
    randomIndex = Math.floor(Math.random() * (i + 1));

    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  return array.slice(0, Math.min(count, array.length));
};

const showPhotosDebounce = debounce((data) => showPhotos(data));

const sortMessageAmount = (dataPhotos) => {
  const array = [...dataPhotos];
  const messageAmountSort = (messageA, messageB) => messageB.comments.length - messageA.comments.length;
  const sortArray = array.sort(messageAmountSort);
  return sortArray;
};

const getFilterPhotos = (dataPhotos) => {
  renderFilterDefault(dataPhotos);
  filterBtns.forEach((btn) => {

    btn.addEventListener('click', () => {
      cleanBtn(filterBtns);
      cleanPictureContainer();

      btn.classList.add('img-filters__button--active');

      switch(btn.id) {
        case ('filter-default'):
          renderFilterDefault(dataPhotos);
          break;

        case ('filter-random'): {
          const newDataPhotos = shuffleData(dataPhotos);
          showPhotosDebounce(newDataPhotos);
          break;
        }

        case ('filter-discussed'): {
          const newDataPhotos = sortMessageAmount(dataPhotos);
          showPhotos(newDataPhotos);
          break;
        }
      }
    });
  });
};


export { getFilterPhotos };

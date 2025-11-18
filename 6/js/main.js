import './utils.js';
import { renderPreview } from './preview-photo.js';
import { dataPhotos } from './data.js';


const init = () => {
  dataPhotos.forEach((data) => {
    const { url, description, like, comments } = data;
    renderPreview(url, description, like, comments);
  });
};


init();

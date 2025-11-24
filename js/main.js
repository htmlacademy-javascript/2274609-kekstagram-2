import './utils.js';
import { renderPreview } from './preview-photo.js';
import { renderFullPhoto } from './full-photo.js';
import { dataPhotos } from './data.js';


const init = () => {
  renderPreview(dataPhotos);
  renderFullPhoto(dataPhotos);
};

init();

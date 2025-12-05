import { sendData } from './form.js';
import { renderPreview } from './preview-photo.js';
import { renderFullPhoto } from './full-photo.js';
import { getData } from './fetch.js';
import { showAlert } from './utils.js';


const init = () => {
  getData()
    .then((dataPhotos) => {
      renderPreview(dataPhotos);
      renderFullPhoto(dataPhotos);
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error.message);
      showAlert();
    });
  sendData();
};

init();

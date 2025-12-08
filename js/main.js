import { initFormSubmit } from './form.js';
import { renderPreview } from './preview-photo.js';
import { renderFullPhoto } from './full-photo.js';
import { getData } from './fetch.js';
import { showAlert } from './modal-message-user.js';


const init = () => {
  getData()
    .then((dataPhotos) => {
      renderPreview(dataPhotos);
      renderFullPhoto(dataPhotos);
    })
    .catch(() => {
      showAlert();
    });
  initFormSubmit();
};

init();

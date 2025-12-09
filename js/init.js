import { initFormSubmit } from './form.js';
import { getData } from './fetch.js';
import { showAlert } from './modal-message-user.js';
import { getFilterPhotos } from './filter.js';


const init = () => {
  getData()
    .then((dataPhotos) => {
      getFilterPhotos(dataPhotos);
    })
    .catch(() => {
      showAlert();
    });
  initFormSubmit();
};

export { init };

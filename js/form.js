import { isEscapeKey } from './utils.js';
import { isHashtag, isDubleHashtags, isLengthHashtags, isCommentLength } from './valid-form.js';
import { showSucces, showError } from './modal-message-user.js';
import { initScale } from './scalle-photo.js';
import { initSlaider } from './slider-effects.js';
import { setData } from './fetch.js';

const formLoad = document.querySelector('#upload-select-image');

const fieldLoadFile = formLoad.querySelector('#upload-file');
const modalEditing = formLoad.querySelector('.img-upload__overlay');

const fieldHashtag = formLoad.querySelector('.text__hashtags');
const fieldDescription = formLoad.querySelector('.text__description');

const previewImage = formLoad.querySelector('.img-upload__preview img');
const effectPreviews = formLoad.querySelectorAll('.effects__preview');

const btnCloseForm = formLoad.querySelector('.img-upload__cancel');

const pristine = new Pristine(formLoad, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

pristine.addValidator(fieldHashtag, isHashtag, 'Неверный хэш-тег', 1, false);
pristine.addValidator(fieldHashtag, isDubleHashtags, 'Хэш-теги дублируются', 2, false);
pristine.addValidator(fieldHashtag, isLengthHashtags, 'Не более пяти хэш-тегов', 3, false);

pristine.addValidator(fieldDescription, isCommentLength, false);

const showModalEditing = () => {
  modalEditing.classList.remove('hidden');
  document.body.classList.add('modal-open');
  initScale();
  initSlaider();
  document.addEventListener('keydown', onModalEditingEscKeydown);
};

const onFieldLoadChange = (evt) => {
  evt.preventDefault();

  const file = evt.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const fileURL = reader.result;
      previewImage.src = fileURL;

      effectPreviews.forEach((preview) => {
        preview.style.backgroundImage = `url(${fileURL})`;
      });

    });

    reader.readAsDataURL(file);
  }

  showModalEditing();
};

const onBtnCloseClick = () => {
  formLoad.reset();
  pristine.reset();

  modalEditing.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEditingEscKeydown);
};

fieldLoadFile.addEventListener('change', onFieldLoadChange);

const initFormSubmit = () => {
  formLoad.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);
      setData(formData)
        .then(() => {
          showSucces();
          onBtnCloseClick();
        })
        .catch(() => {
          showError();
        });
    }
  });

  btnCloseForm.addEventListener('click', onBtnCloseClick);
};

function onModalEditingEscKeydown (evt) {
  if (fieldHashtag === document.activeElement || fieldDescription === document.activeElement) {
    return evt;
  }

  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onBtnCloseClick();
  }
}

export { initFormSubmit, onModalEditingEscKeydown };

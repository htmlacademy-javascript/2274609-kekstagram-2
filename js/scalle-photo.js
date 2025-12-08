const DEFAULT_SCALE = 100;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const STEP_SCALE = 25;

const imgScale = document.querySelector('.img-upload__scale');

const btnSmaller = imgScale.querySelector('.scale__control--smaller');
const btnBigger = imgScale.querySelector('.scale__control--bigger');
const scaleInput = imgScale.querySelector('.scale__control--value');

const previewPhoto = document.querySelector('.img-upload__preview img');

const applyScaleToPhoto = (scaleValue = DEFAULT_SCALE) => {
  previewPhoto.setAttribute('style', `transform: scale(${scaleValue / 100})`);
};

const updateScaleInput = (scaleValue = DEFAULT_SCALE) => {
  scaleInput.value = `${scaleValue}%`;
};

const onBtnSmallerClick = () => {
  let currentValue = parseInt(scaleInput.value, 10);
  currentValue = Math.max(MIN_SCALE, currentValue - STEP_SCALE);

  updateScaleInput(currentValue);
  applyScaleToPhoto(currentValue);
};

const onBtnBiggerClick = () => {
  let currentValue = parseInt(scaleInput.value, 10);
  currentValue = Math.min(MAX_SCALE, currentValue + STEP_SCALE);

  updateScaleInput(currentValue);
  applyScaleToPhoto(currentValue);
};

btnSmaller.addEventListener('click', onBtnSmallerClick);
btnBigger.addEventListener('click', onBtnBiggerClick);

const initScale = () => {
  applyScaleToPhoto();
  updateScaleInput();
};

export { initScale };

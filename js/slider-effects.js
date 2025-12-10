const EFFECTS = {
  none: {
    name: 'none',
    style: '',
    sliderOptions: null,
  },
  chrome: {
    name: 'chrome',
    style: 'grayscale',
    unit: '',
    sliderOptions: { range: { min: 0, max: 1 }, start: 1, step: 0.1 },
  },
  sepia: {
    name: 'sepia',
    style: 'sepia',
    unit: '',
    sliderOptions: { range: { min: 0, max: 1 }, start: 1, step: 0.1 },
  },
  marvin: {
    name: 'marvin',
    style: 'invert',
    unit: '%',
    sliderOptions: { range: { min: 0, max: 100 }, start: 100, step: 1 },
  },
  phobos: {
    name: 'phobos',
    style: 'blur',
    unit: 'px',
    sliderOptions: { range: { min: 0, max: 3 }, start: 3, step: 0.1 },
  },
  heat: {
    name: 'heat',
    style: 'brightness',
    unit: '',
    sliderOptions: { range: { min: 1, max: 3 }, start: 3, step: 0.1 },
  },
};

const sliderContainer = document.querySelector('.img-upload__effect-level');
const sliderElement = sliderContainer.querySelector('.effect-level__slider');
const sliderValue = sliderContainer.querySelector('.effect-level__value');

const conteinerEffects = document.querySelector('.img-upload__effects');

const previewPhoto = document.querySelector('.img-upload__preview img');

let currentEffectName = 'none';

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 10,
  connect: 'lower',
});

const changeFilter = (value) => {
  const currentEffectConfig = EFFECTS[currentEffectName];
  if (currentEffectConfig.style) {
    previewPhoto.style.filter = `${currentEffectConfig.style}(${value}${currentEffectConfig.unit})`;
  } else {
    previewPhoto.style.filter = '';
  }

};

sliderElement.noUiSlider.on('update', () => {
  const value = sliderElement.noUiSlider.get();
  sliderValue.value = value;
  changeFilter(value);
});


const changeEffectPhoto = (effectName) => {
  currentEffectName = effectName;
  const currentEffectConfig = EFFECTS[effectName];

  if (!currentEffectConfig.sliderOptions) {
    sliderContainer.classList.add('hidden');
    previewPhoto.style.filter = '';
    return;
  }

  sliderContainer.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions(currentEffectConfig.sliderOptions);
};

conteinerEffects.addEventListener('change', (evt) => {
  changeEffectPhoto(evt.target.value);
});

const initSlaider = () => {
  changeEffectPhoto('none');
};

export { initSlaider };

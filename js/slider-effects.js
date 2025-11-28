const sliderContainer = document.querySelector('.img-upload__effect-level');
const sliderElement = sliderContainer.querySelector('.effect-level__slider');
const sliderValue = sliderContainer.querySelector('.effect-level__value');

const conteinerEffects = document.querySelector('.img-upload__effects');
const effectElements = conteinerEffects.querySelectorAll('.effects__radio');

const previewPhoto = document.querySelector('.img-upload__preview img');

let currentEffect = 'effect-none';

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 10,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  const value = sliderElement.noUiSlider.get();
  sliderValue.value = value;

  changeFilter(currentEffect, value);
});

function changeFilter(effect, value) {
  let filter = '';

  switch (effect) {
    case 'effect-chrome':
      filter = `grayscale(${value})`;
      break;

    case 'effect-sepia':
      filter = `sepia(${value})`;
      break;

    case 'effect-marvin':
      filter = `invert(${value}%)`;
      break;

    case 'effect-phobos':
      filter = `blur(${value}px)`;
      break;

    case 'effect-heat':
      filter = `brightness(${value})`;
      break;

    case 'effect-none':
      filter = '';
      break;
  }

  previewPhoto.style.filter = filter;
}

function changeEffectPhoto(attribute) {
  currentEffect = attribute;

  previewPhoto.className = '';
  previewPhoto.classList.add(
    `effects__preview--${attribute.replace('effect-', '')}`
  );

  let options = {};
  let sliderHidden = false;

  switch (attribute) {
    case 'effect-none':
      sliderHidden = true;
      break;

    case 'effect-chrome':
    case 'effect-sepia':
      options = {
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      };
      break;

    case 'effect-marvin':
      options = {
        range: {
          min: 0,
          max: 100,
        },
        start: 100,
        step: 1,
      };
      break;

    case 'effect-phobos':
      options = {
        range: {
          min: 0,
          max: 3,
        },
        start: 3,
        step: 0.1,
      };
      break;

    case 'effect-heat':
      options = {
        range: {
          min: 1,
          max: 3,
        },
        start: 3,
        step: 0.1,
      };
      break;
  }

  if (sliderHidden) {
    sliderContainer.classList.add('hidden');
  } else {
    sliderContainer.classList.remove('hidden');
  }

  sliderElement.noUiSlider.updateOptions(options);
}

effectElements.forEach((effect) => {
  effect.addEventListener('click', () => {
    const idEffect = effect.getAttribute('id');
    changeEffectPhoto(idEffect);
  });
});

export function defaultSlaiderElement() {
  document.querySelector('#effect-none').checked = true;
  changeEffectPhoto('effect-none');
}

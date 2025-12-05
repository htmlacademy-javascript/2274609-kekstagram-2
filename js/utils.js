const ALERT__SHOW__TIME = 5000;

const alertTemplate = document.querySelector('#data-error').content;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEmptyStr = (value) => {
  if (value.trim() === '') {
    return true;
  }
  return false;
};

const normalizeHashtag = (value) => {
  const hashtags = value.split(' ').filter((item) => item.trim() !== '');
  return hashtags;
};

const isHashtag = (value) => {
  if (isEmptyStr(value)) {
    return true;
  }

  const hashtags = normalizeHashtag(value);
  const reg = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  const noValidHastags = hashtags.filter((item) => reg.test(item) === false);
  return noValidHastags.length === 0;
};

const isDubleHashtags = (value) => {
  if(isEmptyStr(value)) {
    return true;
  }

  const hashtags = normalizeHashtag(value);
  const countItems = {};
  hashtags.forEach((item) => {
    const newItem = item.toUpperCase();
    countItems[newItem] = countItems[newItem] ? countItems[newItem] + 1 : 1;
  });
  const dubleHashtags = Object.keys(countItems).filter((item) => countItems[item] > 1);
  return dubleHashtags.length === 0;
};

const isLengthHashtags = (value) => {
  if (isEmptyStr(value)) {
    return true;
  }

  const hashtags = normalizeHashtag(value);
  if (hashtags.length > 5) {
    return false;
  }
  return true;
};

const isCommentLength = (value) => {
  if (isEmptyStr(value)) {
    return true;
  }

  return value.length > 1 && value.length <= 140;
};

const showAlert = () => {
  const alertFragment = alertTemplate.cloneNode(true);
  const alertElement = alertFragment.firstElementChild;

  document.body.append(alertFragment);

  setTimeout(() => {
    alertElement.remove();
  }, ALERT__SHOW__TIME);
};

const hidenShowSucces = () => {
  const cloneShowSucces = document.querySelector('.success');
  cloneShowSucces.remove();
  clinearEventSuccess();
};

const onEventSuccessClick = (evt) => {
  const success = document.querySelector('.success__inner');
  const successMasege = document.querySelector('.success__title');

  if (evt.target === success || evt.target === successMasege) {
    evt.stopPropagation();
  } else {
    hidenShowSucces();
  }
};

const onEventSuccessEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    hidenShowSucces();
  }
};

function clinearEventSuccess () {
  document.removeEventListener('click', onEventSuccessClick);
  document.removeEventListener('keydown', onEventSuccessEscKeydown);
}

const showSucces = () => {
  const templateSucces = document.querySelector('#success').content;
  const newSucces = templateSucces.querySelector('.success');
  const cloneSucces = newSucces.cloneNode(true);

  document.body.append(cloneSucces);

  document.addEventListener('click', onEventSuccessClick);
  document.addEventListener('keydown', onEventSuccessEscKeydown);
};

const hidenShowError = () => {
  const cloneShowError = document.querySelector('.error');
  cloneShowError.remove();
  clinearEventError();
};

const onEvenErrorClick = (evt) => {
  const error = document.querySelector('.error__inner');
  const errorMessage = document.querySelector('.error__title');

  if (evt.target === error || evt.target === errorMessage) {
    evt.stopPropagation();
  } else {
    hidenShowError();
  }
};

const onEvenErrorEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    hidenShowError();
  }
};

function clinearEventError () {
  document.removeEventListener('click', onEvenErrorClick);
  document.removeEventListener('keydown', onEvenErrorEscKeydown);
}

const showError = () => {
  const templateShowError = document.querySelector('#error').content;
  const newTemplateShowError = templateShowError.querySelector('.error');
  const cloneShowError = newTemplateShowError.cloneNode(true);
  cloneShowError.setAttribute('style', 'z-index: 3');

  document.body.append(cloneShowError);

  document.addEventListener('click', onEvenErrorClick);
  document.addEventListener('keydown', onEvenErrorEscKeydown);
};


export { getRandomNumber, /*getNumbers,*/ isEscapeKey, isHashtag, isDubleHashtags, isLengthHashtags, isCommentLength, showAlert, showSucces, showError };

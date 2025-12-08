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

export { isHashtag, isDubleHashtags, isLengthHashtags, isCommentLength };

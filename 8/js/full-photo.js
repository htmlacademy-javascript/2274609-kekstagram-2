import { getRandomNumber, isEscapeKey } from './utils.js';

const fullPhotoSection = document.querySelector('.big-picture');

const fullPhotoContainer = fullPhotoSection.querySelector('.big-picture__img');
const fullPhoto = fullPhotoContainer.querySelector('img');

const fullPhotoSocialContainer = fullPhotoSection.querySelector('.big-picture__social');
const photoAuthor = fullPhotoSocialContainer.querySelector('img');
const photoDescription = fullPhotoSocialContainer.querySelector('.social__caption');
const photoSumLike = fullPhotoSocialContainer.querySelector('.likes-count');

const fullPhotoCommentContainer = fullPhotoSection.querySelector('.social__comment-count');
const showCommentNum = fullPhotoCommentContainer.querySelector('.social__comment-shown-count');
const sumComment = fullPhotoCommentContainer.querySelector('.social__comment-total-count');

const listComment = fullPhotoSection.querySelector('.social__comments');

const btnLoadComment = fullPhotoSection.querySelector('.comments-loader');
const btnClose = fullPhotoSection.querySelector('.big-picture__cancel');

const NUMBER_COMMENT = 5;

let allComments = [];
let countComment = 0;

export function renderFullPhoto(data) {
  const photoContainer = document.querySelector('.pictures');

  photoContainer.addEventListener('click', (evt) => {
    const photo = evt.target.closest('.picture');

    if (!photo) {
      // eslint-disable-next-line no-useless-return
      return;
    }

    const src = photo.querySelector('.picture__img').getAttribute('src');
    const dataPhoto = data.find((item) => item.url === src);

    const { url, description, like, comments } = dataPhoto;
    countComment = 0;
    allComments = comments;

    openModal();
    createFullPhoto(url, description, like);
    listComment.innerHTML = '';
    showCommentsPhoto();
  });
}

function openModal() {
  fullPhotoSection.classList.remove('hidden');
  document.body.classList.add('modal-open');

  btnClose.addEventListener('click', handleCloseClick);
  document.addEventListener('keydown', handleCloseKey);
}

function createFullPhoto (url, description, like) {
  fullPhoto.src = url;
  fullPhoto.alt = description;

  photoAuthor.src = `img/avatar-${getRandomNumber(1, 6)}.svg`;
  photoDescription.textContent = description;
  photoSumLike.textContent = like;
}

function showCommentsPhoto() {
  const fragment = document.createDocumentFragment();
  const startIndex = countComment;
  countComment += NUMBER_COMMENT;
  const endIndex = Math.min(countComment, allComments.length);
  btnLoadComment.classList.remove('hidden');

  if (countComment < allComments.length) {
    showCommentNum.textContent = countComment;
    sumComment.textContent = allComments.length;
    const currentComment = renderCommentsPhoto(allComments.slice(startIndex, endIndex), fragment);
    listComment.append(currentComment);
    btnLoadComment.addEventListener('click', handleLoadClick);
  } else {
    countComment = allComments.length;
    showCommentNum.textContent = countComment;
    sumComment.textContent = allComments.length;
    btnLoadComment.classList.add('hidden');
    const currentComment = renderCommentsPhoto(allComments.slice(startIndex, endIndex), fragment);
    listComment.append(currentComment);
  }
}

function renderCommentsPhoto(comments, fragment) {
  comments.forEach((comment) => {
    const li = document.createElement('li');
    li.classList.add('social__comment');

    const img = document.createElement('img');
    img.classList.add('social__picture');
    img.src = comment.avatar;
    img.alt = comment.name;
    img.width = 35;
    img.height = 35;
    li.append(img);

    const text = document.createElement('p');
    text.classList.add('social__text');
    text.textContent = comment.message;
    li.append(text);

    fragment.append(li);
  });
  return fragment;
}

function closeModelOpen () {
  fullPhotoSection.classList.add('hidden');
  document.body.classList.remove('modal-open');
  btnClose.removeEventListener('click', handleCloseClick); // можно удалить, при закрытии модального окна обработчик все равно удалится
  btnLoadComment.removeEventListener('click', handleLoadClick); // можно удалить, при закрытии модального окна обработчик все равно удалится
  document.removeEventListener('keydown', handleCloseKey);
}

function handleLoadClick() {
  showCommentsPhoto();
}

function handleCloseClick () {
  closeModelOpen();
}

function handleCloseKey(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault(evt);
    closeModelOpen();
  }
}

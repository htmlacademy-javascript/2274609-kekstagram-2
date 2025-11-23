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

export function renderFullPhoto(data) {
  const photos = document.querySelectorAll('.picture');
  photos.forEach((photo) => {
    photo.addEventListener('click', () => {
      const url = photo.querySelector('.picture__img').getAttribute('src');
      const dataPhoto = data.filter((item) => item.url === url);

      const itemData = dataPhoto[0];

      openFullPhoto(itemData);
      showCommentsPhoto(itemData);

      //скрываю контейнер комментариев и кнопку загрузки новых комментариев согласно ТЗ к ДЗ
      fullPhotoCommentContainer.classList.add('hidden');
      btnLoadComment.classList.add('hidden');
    });
  });
}

function openFullPhoto(data) {
  fullPhotoSection.classList.remove('hidden');
  document.body.classList.add('modal-open');

  fullPhoto.src = data.url;
  fullPhoto.alt = data.description;

  photoAuthor.src = `img/avatar-${getRandomNumber(1, 6)}.svg`;
  photoDescription.textContent = data.description;
  photoSumLike.textContent = data.like;

  btnClose.addEventListener('click', handleCloseClick);
  document.addEventListener('keydown', handleCloseKey);
}

function showCommentsPhoto(data) {
  showCommentNum.textContent = data.comments.length; // здесь будет константа с числом комментариев которые показываем
  sumComment.textContent = data.comments.length; // здесь общее число комментариев к фотографии
  renderCommentsPhoto(data); // функция создания комментариев из массива данных
}

function renderCommentsPhoto(data) {
  // удаляю комментарии по дефолту из списка
  listComment.querySelectorAll('.social__comment').forEach((comment) => comment.remove());

  data.comments.forEach((comment) => {
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

    listComment.append(li);
  });
}

function closeModelOpen () {
  fullPhotoSection.classList.add('hidden');
  document.body.classList.remove('modal-open');
  btnClose.removeEventListener('click', handleCloseClick);
  document.removeEventListener('keydown', handleCloseKey);
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

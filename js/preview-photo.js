const containerPreview = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;

export const renderPreview = (url, description, like, comments) => {
  const container = pictureTemplate.cloneNode(true);

  const photo = container.querySelector('.picture__img');
  const numComment = container.querySelector('.picture__comments');
  const numLike = container.querySelector('.picture__likes');

  photo.src = url;
  photo.alt = description;
  numComment.textContent = comments.length;
  numLike.textContent = like;

  containerPreview.append(container);
};

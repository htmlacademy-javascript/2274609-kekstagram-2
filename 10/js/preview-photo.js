const containerPreview = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;
const picturesFragment = document.createDocumentFragment();

const renderPreview = (dataPictures) => {
  dataPictures.forEach((data) => {
    const { url, description, like, comments } = data;

    const container = pictureTemplate.cloneNode(true);

    const photo = container.querySelector('.picture__img');
    const numComment = container.querySelector('.picture__comments');
    const numLike = container.querySelector('.picture__likes');

    photo.src = url;
    photo.alt = description;
    numComment.textContent = comments.length;
    numLike.textContent = like;

    picturesFragment.append(container);
  });

  containerPreview.append(picturesFragment);
};

export { renderPreview };

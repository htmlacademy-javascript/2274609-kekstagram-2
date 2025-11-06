function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getNumbers(min = 1, max = 25, count = max) {
  if (count > (max - min + 1) || count <= 0) {
    return [];
  }

  const numbers = [];
  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }

  // Перемешиваем массив (алгоритм тасования Фишера-Йетса)
  for (let i = numbers.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
  return numbers.slice(0, count);
}

function getComments (commentsSum, idComments, avatarStartNum, avatarEndNum, message, name) {
  const comments = Array.from({ length: commentsSum }, () => {
    const uniqueCommentId = idComments.pop();
    return {
      id: uniqueCommentId,
      avatar: `img/avatar-${getRandomNumber(avatarStartNum, avatarEndNum)}.svg`,
      message: message[getRandomNumber(0, message.length - 1)],
      name: name[getRandomNumber(0, name.length - 1)],
    };
  });
  return comments;
}

function getDataPhotos (parametrs) {
  const {
    lengthArr,
    avatarStartNum,
    avatarEndNum,
    likeStartNum,
    likeEndNum,
    commentStartNum,
    commentEndNum,
    idDatas,
    idComments,
    message,
    name,
    description
  } = parametrs;

  const photoDatas = Array.from({ length: lengthArr }, (_, index) => {
    const currentId = idDatas[index];

    const commentsSum = getRandomNumber(commentStartNum, commentEndNum);
    const comments = getComments(
      commentsSum,
      idComments,
      avatarStartNum,
      avatarEndNum,
      message,
      name
    );

    return {
      id: currentId,
      url: `photos/${currentId}.jpg`,
      description: description[getRandomNumber(0, description.length - 1)],
      likes: getRandomNumber(likeStartNum, likeEndNum),
      comments: comments,
    };
  });

  return photoDatas;
}

export { getRandomNumber, getNumbers, getComments, getDataPhotos };

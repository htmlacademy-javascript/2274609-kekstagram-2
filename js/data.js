import { getRandomNumber, getNumbers } from './utils.js';
import { LENGTH_PHOTO_DATAS, LENGHT_COMMENTS, START_NUM, AVATAR_END_NUM, LIKE_START_NUM, LIKE_END_NUM, COMMENT_END_NUM } from './const.js';

const DESCRIPTIONS = [
  'Моя бабушка курит трубку',
  'Куда идем мы с Пятачком?',
  'Закат на Замковой горе',
  'Я иду по лужам',
  'Асталависта беби',
  'Первый пошел',
  'Торт для принцессы',
  'Шрек, Очкарик и Осел',
  'Фотка на паспорт',
  'Хорошо лежим',
  'Хорошо бежим',
  'Три по пятьдесят',
  'Мы на море',
  'Звезда',
  'Запасы на зиму',
  'Аленький цветочек',
  'Шел, нашел и потерял',
  'Летел и таял',
  'Рвем павдер',
  'Поймай волну',
  'От нашей любви еще никто не уходил',
  'Терминатор',
  'Курочка, но не ряба',
  'Мои любимые кросовки',
  'Не, ну а че? Всем можно, я что лысый',
  'В белом пальто',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Артем',
  'Ирина',
  'Алексей',
  'Ольга',
  'Падла под оконная',
  'В семье не безурода',
  'Илья',
  'А я болеюю за Динамо',
  'Шрек',
  'Очкарик',
  'Полина',
  'Толян',
  'Юлия',
  'Юрец'
];

const ID_DATAS = getNumbers(START_NUM, LENGTH_PHOTO_DATAS);
const ID_COMMENTS = getNumbers(START_NUM, LENGHT_COMMENTS);

const parameter = {
  lengthArr: LENGTH_PHOTO_DATAS,
  avatarStartNum: START_NUM,
  avatarEndNum: AVATAR_END_NUM,
  likeStartNum: LIKE_START_NUM,
  likeEndNum: LIKE_END_NUM,
  commentStartNum: START_NUM,
  commentEndNum: COMMENT_END_NUM,
  idDatas: ID_DATAS,
  idComments: ID_COMMENTS,
  messages: MESSAGES,
  names: NAMES,
  descriptions: DESCRIPTIONS,
};

const getComments = (commentsSum, idComments, avatarStartNum, avatarEndNum, message, name) => {
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
};

const getDataPhotos = (parametres) => {
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
    messages,
    names,
    descriptions
  } = parametres;

  const photoDatas = Array.from({ length: lengthArr }, (_, index) => {
    const currentId = idDatas[index];

    const commentsSum = getRandomNumber(commentStartNum, commentEndNum);
    const comments = getComments(
      commentsSum,
      idComments,
      avatarStartNum,
      avatarEndNum,
      messages,
      names
    );

    return {
      id: currentId,
      url: `photos/${currentId}.jpg`,
      description: descriptions[getRandomNumber(0, descriptions.length - 1)],
      like: getRandomNumber(likeStartNum, likeEndNum),
      comments: comments,
    };
  });

  return photoDatas;
};


export const dataPhotos = getDataPhotos(parameter);

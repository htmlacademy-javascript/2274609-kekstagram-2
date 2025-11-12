import { getNumbers, getDataPhotos } from './function.js';

const LENGTH_PHOTO_DATAS = 25;
const AVATAR_START_NUM = 1;
const AVATAR_END_NUM = 6;
const LIKE_START_NUM = 15;
const LIKE_END_NUM = 200;
const COMMENT_START_NUM = 1;
const COMMENT_END_NUM = 3;

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

const idDatas = getNumbers(1, 25);
const idComments = getNumbers(1, 150);

const parameter = {
  lengthArr: LENGTH_PHOTO_DATAS,
  avatarStartNum: AVATAR_START_NUM,
  avatarEndNum: AVATAR_END_NUM,
  likeStartNum: LIKE_START_NUM,
  likeEndNum: LIKE_END_NUM,
  commentStartNum: COMMENT_START_NUM,
  commentEndNum: COMMENT_END_NUM,
  idDatas: idDatas,
  idComments: idComments,
  messages: MESSAGES,
  names: NAMES,
  descriptions: DESCRIPTIONS,
};

export const dataPhotos = getDataPhotos(parameter);


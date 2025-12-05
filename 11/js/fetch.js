const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const sendRequest = (url, options) => fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    return response;
  });

const getData = () => sendRequest(`${BASE_URL}/data`)
  .then((response) => response.json())
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error('Ошибка получения данных:', error.message);
    throw error;
  });

const setData = (body) => sendRequest(BASE_URL, {
  method: 'POST',
  body,
})
  .then(() => true);


export { getData, setData };

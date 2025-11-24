export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getNumbers(min = 1, max = 25, count = max) {
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

export const isEscapeKey = (evt) => evt.key === 'Escape';

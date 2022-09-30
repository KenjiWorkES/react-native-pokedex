export function addExtraZero(num, totalLenght) {
  return String(num).padStart(totalLenght, '0');
}

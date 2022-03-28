export const formatToSnakeCase = (element) => {
  return element.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
};
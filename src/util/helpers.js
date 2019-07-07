const Entities = require('html-entities').AllHtmlEntities;
const seedRandom = require('seedrandom');

export const decodeEntities = content => Entities.decode(content);

export const getExcerpt = (content, length) => {
  // Trim content to length
  const trimmedContent = content.substring(0, length);
  // Make sure excerpt doesn't split a word in half
  const excerpt = trimmedContent.substring(0, trimmedContent.lastIndexOf(' '));
  // Return with added ellipsis
  return `${excerpt}...`;
};

export const getSeededRandom = seedStr => seedRandom(seedStr)();
export const generateKey = pre => `${pre}_${new Date().getTime()}`;
export const getNumberedAffix = index => `${(index < 9) ? `0${index + 1}` : index + 1}`;

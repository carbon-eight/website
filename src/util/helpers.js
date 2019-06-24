const Entities = require('html-entities').AllHtmlEntities;

export const decodeEntities = content => Entities.decode(content);

export const getExcerpt = (content, length) => {
  // Trim content to length
  const trimmedContent = content.substring(0, length);
  // Make sure excerpt doesn't split a word in half
  const excerpt = trimmedContent.substring(0, trimmedContent.lastIndexOf(' '));
  // Return with added ellipsis
  return `${excerpt}...`;
};

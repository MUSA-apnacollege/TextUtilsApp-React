/**
 * Converts text to uppercase
 * @param {string} text - The input text
 * @returns {string} - Uppercase text
 */
export const toUpperCase = (text) => text.toUpperCase();

/**
 * Converts text to lowercase
 * @param {string} text - The input text
 * @returns {string} - Lowercase text
 */
export const toLowerCase = (text) => text.toLowerCase();

/**
 * Removes extra spaces from text
 * @param {string} text - The input text
 * @returns {string} - Text with normalized spaces
 */
export const removeExtraSpaces = (text) => text.split(/[ ]+/).join(" ");

/**
 * Counts words in text
 * @param {string} text - The input text
 * @returns {number} - Word count
 */
export const countWords = (text) => {
  return text.split(/\s+/).filter(element => element.length !== 0).length;
};

/**
 * Calculates reading time in minutes
 * @param {string} text - The input text
 * @returns {number} - Reading time in minutes
 */
export const calculateReadingTime = (text) => {
  return 0.008 * countWords(text);
};
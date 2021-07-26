
/**
 * Check string must be json
 * @param {string} str 
 * @returns true or false
 */
const hasJsonStructure = (str) => {
  if (typeof str !== 'string') return false;
  try {
    const result = JSON.parse(str);
    const type = Object.prototype.toString.call(result);
    return type === '[object Object]'
      || type === '[object Array]';
  } catch (err) {
    return false;
  }
}

export default hasJsonStructure;

/**
 * Substitutes placeholders in a string with provided values.
 * @param {string} str - The string containing placeholders.
 * @param {...any} vars - The values to replace the placeholders.
 * @returns {string} - The resulting string with substituted values.
 */
export const strSub = (str: string, ...vars: any[]): string => {
  vars.forEach((arg, i) => {
    const regExp = new RegExp(`%${i + 1}([^\\d]|$)`, "g"); // Matches %1, %2, etc.
    str = str.replace(regExp, `${arg}$1`);
  });
  return str;
};

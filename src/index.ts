/**
 * Alternative implementation of if-else statement
 * @param t Returned if true
 * @param f Returned if false
 * @param c Condition
 */
export const arrif = (t: any, f: any, c: (number|boolean|string|null|undefined)): any => {
  return [f, t][~~!!c];
};

export default arrif;

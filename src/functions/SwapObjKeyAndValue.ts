export const swapObjKeyAndValue = (obj: any): any => {
  /**
   *  Swap the Javascript object's key with its values and return the resulting object.
   * @param obj An object
   *
   */

  return Object.keys(obj).reduce((acc, cur) => {
    return { ...acc, [obj[cur]]: cur };
  }, {});
};

export const isEqual = <T>(target01: T, target02: T):boolean => {
  return target01 === target02
} 

export const isNull = <T>(value: T):boolean => value === null;

export const twoArraysEqual = <T>(arr1: T[], arr2: T[]): boolean => {
  if (isEqual(arr1.length,arr2.length)) return false;
  const copyArr1 = [...arr1].sort();
  const copyArr2 = [...arr2].sort();
  console.log(copyArr1)
  console.log(copyArr2)
  return copyArr1.every((value, index) => value === copyArr2[index]);
};
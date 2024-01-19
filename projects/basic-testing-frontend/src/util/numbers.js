export function transformToNumber(value) {
  if (value === undefined) {
    return undefined;
  }
  return +value;
}

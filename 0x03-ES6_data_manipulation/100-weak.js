export const weakMap = new WeakMap();

export function queryAPI(endPoint) {
  if (weakMap.get(endPoint) >= 5) throw Error('Endpoint load is high');
  const endPointInWeakMap = weakMap.get(endPoint);
  if (!endPointInWeakMap) {
    weakMap.set(endPoint, 1);
  } else {
    weakMap.set(endPoint, endPointInWeakMap + 1);
  }
}

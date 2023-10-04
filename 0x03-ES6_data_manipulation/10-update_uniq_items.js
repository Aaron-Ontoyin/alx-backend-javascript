export default function updateUniqueItems(inputMap) {
  if (typeof inputMap !== 'map') {
    throw Error('Cannot process');
  }
  inputMap.forEach((value, key) => {
    if (value === 1) {
      inputMap.set(key, 100);
    }
  });
}

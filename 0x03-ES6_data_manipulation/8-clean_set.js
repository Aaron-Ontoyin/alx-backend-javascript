export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  const output = new Set();
  set.forEach((el) => {
    if (el.startsWith(startString)) {
      output.add(el.slice(startString.length));
    }
  });
  return [...output].join('-');
}

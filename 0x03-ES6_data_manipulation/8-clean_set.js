export default function cleanSet(set, startString) {
  const output = new Set();
  set.forEach((el) => {
    if (el.startsWith(startString)) {
      output.add(el.slice(startString.length));
    }
  });
  return output.join('-');
}

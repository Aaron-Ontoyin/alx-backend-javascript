export default function cleanSet(set, startString) {
  if (startString === '' || !startString) {
    return '';
  }

  const output = [];
  set.forEach((el) => {
    if (el.startsWith(startString)) {
      output.push(el.slice(startString.length));
    }
  });
  return output.join('-');
}

export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }

  const res = Array.from(set).filter((word) => word.startsWith(startString))
    .map((word) => word.slice(startString.length));
  return res.join('-');
}

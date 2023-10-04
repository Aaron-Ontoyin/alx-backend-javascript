export default function cleanSet(set, startString) {
  return set.filter((el) => {
    if (el.startsWith(startString)) { return el; }
    return null;
  }).join();
}

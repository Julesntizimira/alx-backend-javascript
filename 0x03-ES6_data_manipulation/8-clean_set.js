export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  return [...set].filter((x) => x.startsWith(startString)).map((x) => x.replace(startString, '')).join('-');
}

export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const filteredValue = [...set]
    .filter((value) => value.startsWith(startString))
    .map((value) => value.substring(startString.length))
    .join('-');
  return filteredValue;
}
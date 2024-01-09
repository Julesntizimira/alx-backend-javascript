export default function getListStudentIds(objectArray) {
  let result = [];
  if (Array.isArray(objectArray)) {
    result = objectArray.map((x) => x.id);
  }
  return result;
}

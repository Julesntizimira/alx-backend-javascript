export default function getListStudentIds(objectArray) {
  const result = [];
  if (Array.isArray(objectArray)) {
    for (const obj of objectArray.values()) {
      result.push(obj.id);
    }
  }
  return result;
}

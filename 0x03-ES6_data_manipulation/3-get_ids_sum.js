export default function getStudentIdsSum(studenstList) {
  return studenstList.reduce((accumulator, currentObj) => accumulator + currentObj.id, 0);
}

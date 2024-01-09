export default function getStudentsByLocation(studenstList, city) {
  return studenstList.filter((obj) => obj.location === city);
}

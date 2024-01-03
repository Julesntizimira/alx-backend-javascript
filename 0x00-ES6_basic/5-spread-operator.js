export default function concatArrays(array1, array2, string) {
  const my_array = [...array1, ...array2, ...(Array.from(string))];
  return my_array;
}

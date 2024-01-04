export default function getResponseFromAPI() {
  const resp = true;
  return new Promise((resolve) => {
    if (resp) {
      resolve(true);
    };
  });
}

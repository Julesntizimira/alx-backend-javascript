export default function handleResponseFromAPI(promise) {
  console.log('Got a response from the API');
  promise.then(() => {
    return {status: 200, body: 'success'};
  }).catch(() => new Error());
}

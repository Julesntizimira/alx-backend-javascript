import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName) {
  let myObj1;
  let myObj2;

  return Promise.all([
    signUpUser(firstName, lastName)
      .then((user) => {
        myObj1 = { status: 200, value: user };
      })
      .catch((error) => {
        myObj1 = { status: 'rejected', value: error };
      }),
    uploadPhoto(fileName)
      .then((photo) => {
        myObj2 = { status: 200, value: photo };
      })
      .catch((error) => {
        myObj2 = { status: 'rejected', value: error };
      }),
  ]).then(() => {
    return [myObj1, myObj2];
  });
}

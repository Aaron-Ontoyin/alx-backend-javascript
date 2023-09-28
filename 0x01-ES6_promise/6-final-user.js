import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const results = [];
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((output) => {
      output.map((status, value, reason) => (
        results.push({ status, value: status === 'rejected' ? reason.toString() : value })
      ));
      return results;
    });
}

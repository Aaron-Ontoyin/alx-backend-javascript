import { uploadPhoto, createUser } from './utils'

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((output) => {
      console.log(`${output.body} ${output.firstName} ${output.lastName}`);
    }).catch(() => {
      console.log('Signup system offline');
    });
}

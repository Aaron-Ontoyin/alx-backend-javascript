export default function getResponseFromAPI(weAreFine = true) {
  return new Promise((resolve, reject) => {
    if (weAreFine === true) {
      resolve();
    } else {
      reject();
    }
  });
}

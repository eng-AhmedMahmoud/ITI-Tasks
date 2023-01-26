// https://api.github.com/users/eng-AhmedMahmoud/repos
const getData = (apiLink) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject("Error" + xhr.status);
      }
    };
    xhr.open("GET", apiLink);
    xhr.send();
  });
};

getData("https://api.github.com/users/eng-AhmedMahmoud/repos")
  .then(result => console.log(result))
  .catch(error => console.log(error));
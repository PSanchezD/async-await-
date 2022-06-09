// importing Axios--------------
const axios = require("axios");

// api - https://pokeapi.co/

// using axios promise base--------

function fetchdata() {
  axios
    .get("https://pokeapi.co/")
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err));
}

// async await---------
async function getdata() {
  const res = await axios.get("https://pokeapi.co/");
  console.log(`Data: ${res.data}`);
}

console.log(getdata())

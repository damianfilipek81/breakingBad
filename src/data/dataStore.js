import axios from 'axios';


// const getData = async () => {
//   const result = await axios.get('https://breakingbadapi.com/api/characters/')
//     .then(function (response) {
//       initialStoreData.app = response.data;
//       console.log(response.data)
//     })
//     return result;
// }
// getData()
// const getData = () => {
//   fetch('https://breakingbadapi.com/api/characters/')
//     .then(res => res.json())
//     .then(data => initialStoreData.app = data)
//     .then(() => console.log('fetch', initialStoreData.app))
// }
// getData()

// const getData = async () => {
//   const request = await fetch('https://breakingbadapi.com/api/characters/');
//   const data = await request.json();
//   return data;
// }
// getData().then(data => {
//   initialStoreData.app = data;
//   console.log('fetch',initialStoreData.app)
// })
// const getData = () => {
//   return fetch('https://breakingbadapi.com/api/characters/')
//     .then(function (rawResponse) {
//       return rawResponse.json();
//     })
// }

// (async () => {
//   initialStoreData.app = await getData();
// })();

export default getData;
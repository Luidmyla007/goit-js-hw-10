import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;

const myInput = document.querySelector("#search-box");
myInput.style.marginTop = "40px";
myInput.style.marginLeft = "40px";
// myInput.style.borderColor = "Blue";
const myList = document.querySelector(".country-list");
const countryInfo = document.querySelector(".country-info");

myInput.addEventListener("input", debounce(onSearch, DEBOUNCE_DELAY));
function onSearch(){
  const name = myInput.value;
   console.log(name);
  fetchCountries(name)
  .then((data) => console.log(data))
  .catch(() => Notiflix.Notify.failure('Oops, there is no country with that name'));
}

function longResponce() {
  const a = 10;
  if (data.length > a) {
  Notiflix.Notify.info('Too many matches found. Please enter a more specific name.')
}
}


function fetchCountries(name) {
  const BASE_URL = 'https://restcountries.com/v3.1/name/';

    return fetch(`${BASE_URL}${name}`).then(
      (response) => {
        if (!response.ok) {
        throw new Error(Notiflix.Notify.failure('Oops, there is no country with that name'));         
      }      
      return response.json();
    }
  );
}

fetchCountries()
  .then((data) => console.log(data))
  
  // if (data.length > 10) {
  //   Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
  // })
  
    .catch(() => Notiflix.Notify.failure('Oops, there is no country with that name'));



// fetchCountries()
//     .then((data) => renderCountryList(name))
//     .catch(() => Notiflix.Notify.failure('Oops, there is no country with that name'));


    // function renderCountryList(name) {
//   console.log("my markup");
  // const markup = countries;
  //   .map((country) => {
  //     return `<li>
  //         <p><b>Name</b>: ${user.name}</p>
  //         <p><b>Email</b>: ${user.email}</p>
  //         <p><b>Company</b>: ${user.company.name}</p>
  //       </li>`;
  //   })
  //   .join("");
  // userList.innerHTML = markup;
// }



// fetchUsersBtn.addEventListener("click", () => {
//   fetchUsers()
//     .then((users) => renderUserList(users))
//     .catch((error) => console.log(error));
// });

// function fetchUsers() {
//   return fetch("https://jsonplaceholder.typicode.com/users").then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }

// function renderUserList(users) {
//   const markup = users
//     .map((user) => {
//       return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//     })
//     .join("");
//   userList.innerHTML = markup;
// }




// onClose(selectedDates) {
//     const selectDate = selectedDates[0];
//     // если выбрана дата из прошлого выводим предупрежд
//       if (date.getTime() >= Number(selectDate.getTime())) {
//         Notiflix.Notify.failure('Please choose a date in the future');  
//         return
//     };
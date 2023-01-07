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






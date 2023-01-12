import './css/styles.css'
import debounce from 'lodash.debounce'
import Notiflix from 'notiflix'
import { fetchCountries } from './fetchCountries.js'

const DEBOUNCE_DELAY = 300

const countryInput = document.querySelector('#search-box')
const countryList = document.querySelector('.country-list')
const countryInfo = document.querySelector('.country-info')

countryInput.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY))

function onSearch() {
  const name = countryInput.value.trim()
  if (name === '') {
    return (countryList.innerHTML = ''), (countryInfo.innerHTML = '')
  }

  fetchCountries(name)
    .then(data => {
      countryList.innerHTML = ''
      countryInfo.innerHTML = ''
      if (data.length === 1) {
        countryList.insertAdjacentHTML('beforeend', renderList(data))
        countryInfo.insertAdjacentHTML('beforeend', renderInfo(data))
      } else if (data.length >= 10) {
          tooManyMatches()
      } else {
        countryList.insertAdjacentHTML('beforeend', renderList(data))
      }
      })
      .catch(wrongName)
    }

function renderList(data) {
  const markup = data
    .map(({ name, flags }) => {
      return `
          <li class="country-list__item">
              <img class="country-list__flag" src="${flags.svg}" alt="Flag of ${name.official}" width = 30px height = 30px>
              <h2 class="country-list__name">${name.official}</h2>
          </li>
          `
    })
    .join('')
  return markup
}

function renderInfo(data) {
  const markup = data
    .map(({ capital, population, languages }) => {
      return `
        <ul class="country-info__list">
            <li class="country-info__item"><p><b>Capital: </b>${capital}</p></li>
            <li class="country-info__item"><p><b>Population: </b>${population}</p></li>
            <li class="country-info__item"><p><b>Languages: </b>${Object.values(languages).join(', ')}</p></li>
        </ul>
        `
    })
    .join('')
  return markup
}


function wrongName() {
  Notiflix.Notify.failure('Oops, there is no country with that name')
}

function tooManyMatches() {
  Notiflix.Notify.info('Too many matches found. Please enter a more specific name.')
}


// styles
countryInput.style.marginTop = "40px";
countryInput.style.marginLeft = "40px";

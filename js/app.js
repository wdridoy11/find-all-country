
const loadApi = () => {
   const url = "https://restcountries.com/v3.1/all"
   fetch(url)
      .then(res => res.json())
      .then(data => displayCountry(data))
}

const displayCountry = (countries) => {
   const allCountry = document.getElementById("all-country");
   countries.map(country => {
      const displayCountryDiv = document.createElement("div");
      displayCountryDiv.classList.add("country")
      displayCountryDiv.innerHTML = `
      <div class="country-flags">
         <img src="${country.flags.png}"/>
      </div>
      <h3>Name: ${country.name.common}</h3>
      <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
      `
      allCountry.appendChild(displayCountryDiv)
      // console.log(country.currencies.na)
   })
}
// country details print
const loadCountryDetails = (code) => {
   const url = `https://restcountries.com/v3.1/alpha/${code}`
   fetch(url)
      .then(res => res.json())
      .then(data => countryDetailsPrint(data[0]))
}
const countryDetailsPrint = (countryDetails) => {
   const countryDetailsContainer = document.getElementById("country-details");
   countryDetailsContainer.innerHTML = `
         <img src="${countryDetails.flags.png}"/>
         <h3>Name: ${countryDetails.name.common}</h3>
         <h3>Capital: ${countryDetails.capital[0]}</h3>
         <h3>Languages: ${countryDetails.languages.fra}</h3>
         <h3>population: ${countryDetails.population}</h3>
         <h3>Area: ${countryDetails.area}</h3>
         <h3>Start Of Week: ${countryDetails.startOfWeek}</h3>
         <h3>Timezones: ${countryDetails.timezones}</h3>
   `
   // console.log(countryDetails.currencies)
}
loadApi()
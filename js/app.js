
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
      // console.log(country)
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
   const detailsElementDiv = document.createElement('div');
   detailsElementDiv.innerHTML = `
      <img src="${countryDetails.flags.png}"/>
      <h3>Name: ${countryDetails.name.common}</h3>
`
   countryDetailsContainer.appendChild(detailsElementDiv)
}
loadApi()

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
      <button>Details</button>
      `
      allCountry.appendChild(displayCountryDiv)
      console.log(country)
   })
}
loadApi()
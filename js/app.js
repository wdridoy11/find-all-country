
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
      <img src="${country.flags.png}"/>
      <h3>Name: ${country.name.common}</h3>
      `
      allCountry.appendChild(displayCountryDiv)
      console.log(country.name.common)
   })
}
loadApi()
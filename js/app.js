
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
      displayCountryDiv.innerHTML = `
      <img src="${country.flags.png}"/>
      
      `
      allCountry.appendChild(displayCountryDiv)
      console.log(country.flags.png)
   })
}
loadApi()
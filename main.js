var cities = []
async  function getResponse(){
    const res = await fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json');
    const response = await res.json();
   
     cities = [...response];
    // console.log(cities);
    }
    getResponse(); 

    function findMatches(wordtomatch,cities){
     return cities.filter((place)=>{
        const regex = new RegExp(wordtomatch,'ig')
        return place.city.match(regex) || place.state.match(regex);
     })
    }

    // async function run() {
    //     await getResponse();
    //     console.log(findMatches('Bos', cities));
    //   }
      
    //   run();
 
function displayMatches(){
    const inputValue = searchInput.value;
    
    if (inputValue.trim() === '') {
        // If the input is empty or only contains whitespace, clear the suggestions
        suggestions.innerHTML = '';
        return;
    }
    
    // console.log(this.value);
    const matchArray = findMatches(searchInput.value,cities);
    // console.log(matchArray);
    const html = matchArray.map(place => {
        return `<li>
          <span class='name'>${place.city},${place.state}</span>
          <span class='population'>${place.population}</span>  
        </li>`;
    }).join('');

    suggestions.innerHTML = matchArray.length === 0 ? `<li>No matches found</li>` : html;
    
    // console.log(suggestions.html);
}


const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

 
searchInput.addEventListener('change',displayMatches);
searchInput.addEventListener('keyup',displayMatches); 



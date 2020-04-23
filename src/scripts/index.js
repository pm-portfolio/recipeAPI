// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/


//HTML elements


// spoonacular API
const key = '0187ecac6907463b98a2f58b42a865f8';
const button = document.querySelector('button');

const submitInput = event => {
  event.preventDefault();
  const userInput = document.querySelector('input');
  const results = document.querySelector('.results');
  const search = userInput.value;
  
  
  fetch(`https://api.spoonacular.com/recipes/search?query=${search}&number=2&apiKey=${key}`)
  .then(response => response.json())
  .then(data => {
    console.log(data.results)
    const arrayOfRecipes = data.results;
    arrayOfRecipes.forEach(recipe => {
      results.innerHTML += 
      ` 
      <div class="recipe">
      <img src="${recipe.image}" alt="image here">
      <h2>${recipe.title}</h2>
      <p>servings: ${recipe.servings}</p>
      <p>Prepare: ${recipe.readyInMinutes} min</p>
      <a href="${recipe.sourceUrl}" target="_blank">To Recipe</a>
      </div>
      `;
      
    })
  })
}

button.addEventListener('click', submitInput);
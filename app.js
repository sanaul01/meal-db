const loadData = () =>{
    const searchText = document.getElementById('input-field')
    const inputText = searchText.value;
    searchText.value = '';
    error.textContent = ''
    
    if(inputText === ''){
      const error = document.getElementById('error');
      error.textContent = '';
      const p = document.createElement('p')
      p.innerText = `error`
      error.appendChild(p)
    }
    
    
    else {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
     fetch(url)
     .then(resposive => resposive.json())
     .then(data => displayField(data.meals))

    }
  }
    

const displayField = meals =>{
 
    const displayField = document.getElementById('display-field')
    displayField.textContent = '';
    meals.forEach(meal =>{
        console.log(meal)
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML = `
        <div class="col">
        <div onclick="details(${meal.idMeal})" class="card h-100">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Title: ${meal.strMeal}</h5>
            <p class="card-text">Discription:${meal.strInstructions.slice(0, 100)}.</p>
          </div>
        </div>
      </div>
        `;
        displayField.appendChild(div)
    });
    
}

const details = mealId =>{
  console.log(mealId)
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayDetails(data.meals))
}

const displayDetails = details =>{
  
  
  details.forEach(detail =>{
    const foodDetails = document.getElementById('detail')
    foodDetails.textContent = '';
    const div = document.createElement('div')
  div.classList.add('card')
  div.innerHTML = `
  <div class="card">
          <img src="${detail.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Title: ${detail.strMeal}</h5>
            <p class="card-text">Details: ${detail.strInstructions.slice(0, 100)}.</p>
            <a href="${detail.strYoutube}" class="btn btn-primary">Show me</a>
          </div>
  </div>
  `;
  foodDetails.appendChild(div)
  
  })
}
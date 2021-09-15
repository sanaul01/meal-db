const loadData = () =>{
    const searchText = document.getElementById('input-field')
    const inputText = searchText.value;
    console.log(inputText)


const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`
fetch(url)
.then(resposive => resposive.json())
.then(data => displayField(data.meals))

}
const displayField = meals =>{
    const displayField = document.getElementById('display-field')
    meals.forEach(meal =>{
        console.log(meal)
        const div = document.createElement('div')
        div.classList.add('card')
        div.innerHTML = `
        <div class="col">
        <div class="card h-100">
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
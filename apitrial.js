async function fetchMeals(query) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
    );

    const data = await res.json();

    let meals = [];

    if (data.meals) {
      meals = data.meals;
    } else {
      meals = [];
    }
// console.log(meals)

    let Meals = meals.map((meal) => {
      return {
        MealId: meal.idMeal,
        Meal: meal.strMeal,
        Category: meal.strCategory,
        Type: meal.strArea,
        img:meal.strMealThumb,

        YoutubeLink: meal.strYoutube,

      };
    });

    return Meals;
  } catch (err) {
    console.log("Error:", err);
    return [];
  }
}

console.log("Hello , Welcome to our restaurant. What would you like to eat? ");

fetchMeals("Chicken").then((meals) => {
  if (meals.length === 0) {
    console.log("Sorry, we don't have that meal. Please try something else.");
  } else {
    console.log("Here are the meals we have for you:");

    console.log("Meals:", meals);
  }
});

const btn = document.getElementById("logo");
btn.addEventListener("click", () => {
  location.reload();
});


const india = document.getElementById("india");
let indian = [];

india.addEventListener("click", () => {
  fetchMeals("chicken").then((meal) => {

    const indian = meal.filter((e) => {
      return (
        e.Type == "Indian" &&
        e.Meal.toLowerCase().includes("chicken")
      );
    });
   const div2 = document.createElement("div");

    indian.forEach((item) => {
      const div = document.createElement("div");
      div.innerText = item.Meal;  
      div2.appendChild(div);
    });

    document.body.appendChild(div2);

  });
});


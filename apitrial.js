async function fetchMeals(query) {


  try {


    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );


    const data = await res.json();


    let meals = [];


    if (data.meals) {


      meals = data.meals;


    } else {


      meals = [];


    }


    let Meals = meals.map((meal) => {


      return {


        MealId: meal.idMeal,


        Meal: meal.strMeal,


        Category: meal.strCategory,


        Type: meal.strArea,


        img: meal.strMealThumb,


        YoutubeLink: meal.strYoutube,


      };


    });


    return Meals;


  } catch (err) {


    console.log("Error:", err);


    return [];


  }

}

const query = "Chicken";


const loading = document.createElement("p");


loading.innerText = "Loading...";


loading.style.fontWeight = "bold";


fetchMeals(query).then((meals) => {


  if (meals.length === 0) {


    const p = document.createElement("p");


    p.innerHTML = `<b>Sorry, we don't have that meal. Please try something else.</b>`;


    document.body.appendChild(p);


  } else {


    console.log("Here are the meals we have for you:");


    console.log("Meals:", meals);

    console.log("API response:", meals);
  }


});


const btn = document.getElementById("logo");


btn.addEventListener("click", () => {


  location.reload();


});


const india = document.getElementById("india");


const japan = document.getElementById("japan");


const china = document.getElementById("china");



india.addEventListener("click", () => {



    document.body.appendChild(loading);


    fetchMeals(query).then((meal) => {


      loading.innerText='';


      const indian = meal.filter((e) => e.Type == "Indian");


      const p = document.createElement("p");


      p.innerHTML = "<h3>Indian</h3>";

      p.style.textAlign="center";
      
      document.body.append(p);


      const div2 = document.createElement("div");


      if (indian.length == 0) {


        const div = document.createElement("div");


        div.innerHTML = `<h3>Not Found</h3>`;


        div2.appendChild(div);


      } else {


        indian.forEach((item) => {


          const div = document.createElement("div");


          div.innerText = item.Meal;


          const image = document.createElement("img");

          const div3 = document.createElement("div");

          image.src = item.img;

          image.alt="Image not avilable";

          image.style.width="350px" ;

          image.style.height="350px";

          image.style.borderRadius="8px";

          div3.append(image)

          div3.style.display="flex";

          div3.style.justifyContent="center";

          div.style.display="flex";

          div.style.alignContent="space-around";

          div.style.justifyContent="center";

          
          


          div2.append(div, div3);

        });

      }
      document.body.appendChild(div2);

   });

});


japan.addEventListener("click", () => {


  document.body.appendChild(loading);


  fetchMeals(query).then((meal) => {

    loading.innerText = '';


    const japanese = meal.filter((e) => e.Type == "Japanese");


    const p = document.createElement("p");


    p.innerHTML = "<h3>Japanese</h3>";


    p.style.textAlign = "center";

    document.body.append(p);

    const div2 = document.createElement("div");

    if (japanese.length == 0) {

      const div = document.createElement("div");


      div.innerHTML = `<h3>Not Found</h3>`;


      div2.appendChild(div);

    } else {

      japanese.forEach((item) => {

        const div = document.createElement("div");


        div.innerText = item.Meal;

        const image = document.createElement("img");


        const div3 = document.createElement("div");

        image.src = item.img;


        image.alt = "Image not available";


        image.style.width = "350px";


        image.style.height = "350px";


        image.style.borderRadius = "8px";

        div3.append(image);


        div3.style.display = "flex";


        div3.style.justifyContent = "center";

        div.style.display = "flex";

        div.style.alignContent = "space-around";


        div.style.justifyContent = "center";

        div2.append(div, div3);
      });

    }

    document.body.appendChild(div2);
  });

});


china.addEventListener("click", () => {

  document.body.appendChild(loading);


  fetchMeals(query).then((meal) => {


    loading.innerText = '';


    const chinese = meal.filter((e) => e.Type == "Chinese");


    const p = document.createElement("p");


    p.innerHTML = "<h3>Chinese</h3>";


    p.style.textAlign = "center";

    document.body.append(p);

    const div2 = document.createElement("div");

    if (chinese.length == 0) {

      const div = document.createElement("div");


      div.innerHTML = `<h3>Not Found</h3>`;


      div2.appendChild(div);

    } else {

      chinese.forEach((item) => {

        const div = document.createElement("div");


        div.innerText = item.Meal;

        const image = document.createElement("img");


        const div3 = document.createElement("div");

        image.src = item.img;


        image.alt = "Image not available";


        image.style.width = "350px";


        image.style.height = "350px";


        image.style.borderRadius = "8px";

        div3.append(image);


        div3.style.display = "flex";

        

        div3.style.justifyContent = "center";

        div.style.display = "flex";

        div.style.justifyContent = "center";

        div.style.alignItems="center";


        div.style.gap="10px";

        div2.append(div, div3);
        
      });

    }

    document.body.appendChild(div2);

  });

});

const h1 = document.getElementById("heading");


setInterval(() => {


  const red = Math.floor(Math.random() * 256);


  const green = Math.floor(Math.random() * 256);


  const blue = Math.floor(Math.random() * 256);


  h1.style.color = `rgb(${red}, ${green}, ${blue})`;


}, 1000);
async function fetchMeals(query) {

  try {

    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );


    const data = await res.json();

    let meals = data.meals ? data.meals : [];

    return meals.map((meal) => {

      return {

        MealId: meal.idMeal,

        Meal: meal.strMeal,

        Category: meal.strCategory,

        Type: meal.strArea,

        img: meal.strMealThumb,

        YoutubeLink: meal.strYoutube,
      };
    });

  } 
  
  catch (err) {

    console.log("Error:", err);
    
    return [];
  }
}

const input = document.getElementById("search");


function getQuery() {

  let q = input.value.trim();

  return q === "" ? "Cake" : q;
}


let query = input.value;

if (query.trim() === "") {

  query = "Cake";

}




const loading = document.createElement("p");


loading.innerText = "Loading...";


loading.style.fontWeight = "bold";


const logo = document.getElementById("logo");


const container = document.getElementById("container");



logo.addEventListener("click", () => {
  location.reload();
});


const india = document.getElementById("india");
const japan = document.getElementById("japan");
const china = document.getElementById("china");


input.addEventListener("keydown", (e) => {

  if (e.key === "Enter") {

    const query = getQuery();

    container.innerHTML = "<p>Loading...</p>";


    fetchMeals(query).then((meals) => {

      displayMeals(meals, `Results for "${query}"`);

    });
  }
});



function displayMeals(meals, title) {

  container.innerHTML = "";

  const heading = document.createElement("h1");


  heading.innerText = title;
  
  heading.style.textAlign = "center";
  
  
  heading.style.width = "100%";
  
  
  heading.style.textDecoration = "underline";


  container.appendChild(heading);


  if (meals.length === 0) {

    const div = document.createElement("div");


    div.innerHTML = `<h3>Not Found</h3>`;


    container.appendChild(div);

    return;
  }

  meals.forEach((item) => {

    const card = document.createElement("div");


    card.style.width = "220px";


    const image = document.createElement("img");

    image.src = item.img;


    image.style.width = "300px";


    image.style.height = "auto";


    image.style.borderRadius = "8px";


    const name = document.createElement("p");


    name.innerText = item.Meal;


    name.style.marginLeft = "85px";


    name.style.fontWeight = "bold";


    name.style.fontSize = "20px";


    card.append(image, name);


    image.addEventListener("mouseenter", () => {


      image.style.transform = "translateY(-15px)";


      image.style.transition = "all 0.3s";


      image.style.boxShadow = "0 0 50px #00c2e9";


      image.style.cursor = "pointer";


      name.style.textShadow =
        "0 0 5px #f79235, 0 0 10px #30a3e1, 0 0 20px #a3ff53";


      name.style.textDecoration = "underline";
    });

    image.addEventListener("mouseleave", () => {
      image.style.transform = "";


      image.style.boxShadow = "";
    });

    container.appendChild(card);

    image.addEventListener("click", () => {
      const link = document.createElement("a");

      if (item.YoutubeLink) {
        link.href = item.YoutubeLink;

        
        link.target = "_blank";
        
        link.appendChild(image);
        
        card.appendChild(link);
      }
    });
  });
}


india.addEventListener("click", () => {


  container.appendChild(loading);

  fetchMeals(getQuery()).then((meal) => {

    
    loading.innerText = "";

    const indian = meal.filter(
      (e) =>
        e.Type === "Indian" ||
        e.Type === "Dutch" ||
        e.Type === "Egyptian" ||
        e.Type === "Irish" ||
        e.Type === "Malaysian" ||
        e.Type === "Mexican" ||
        e.Type === "Portuguese" ||
        e.Type === "Argentinian" ||
        e.Type === "Thai" ||
        e.Type === "Turkish" ||
        e.Type === "Uruguayan" ||
        e.Type === "Australian" ||
        e.Type == "Venezulan"
    );

    displayMeals(indian, "Indian");
  });
});

japan.addEventListener("click", () => {

  
  container.appendChild(loading);

  fetchMeals(getQuery()).then((meal) => {


    loading.innerText = "";

    const japanese = meal.filter(
      (e) =>
        e.Type === "Japanese" ||
        e.Type === "French" ||
        e.Type === "Canadian" ||
        e.Type === "Greek" ||
        e.Type === "Moroccan" ||
        e.Type === "Spanish" ||
        e.Type === "Saudi Arabian" ||
        e.Type === "Syrian" ||
        e.Type === "Polish" ||
        e.Type === "Ukrainian"
    );

    displayMeals(japanese, "Japanese");
  });
});

china.addEventListener("click", () => {


  container.appendChild(loading);

  fetchMeals(getQuery()).then((meal) => {


    loading.innerText = "";

    const chinese = meal.filter(
      (e) =>
        e.Type === "Chinese" ||
        e.Type === "British" ||
        e.Type === "American" ||
        e.Type === "Italian" ||
        e.Type === "Kenyan" ||
        e.Type === "Jamaican" ||
        e.Type === "Russian" ||
        e.Type === "Slovakian" ||
        e.Type === "Vietnamese" ||
        e.Type === "Algerian" ||
        e.Type === "Tunisian" ||
        e.Type === "Filipino"
    );

    displayMeals(chinese, "Chinese");
  });
});



const mode = document.getElementById("mode");

const body = document.getElementById("body");

mode.addEventListener("click", () => {

  if (mode.textContent === "Dark") {

    mode.textContent = "Light";


    body.style.color = "red";


    body.style.backgroundColor = "white";
  } else {


    mode.textContent = "Dark";


    body.style.color = "white";

    body.style.backgroundColor = "black";
  }
});



window.addEventListener("load", () => {

  const query = "Cake"; 

  container.innerHTML = "<p>Loading...</p>";

  fetchMeals(query).then((meals) => {
    
    displayMeals(meals, "Popular Items");
  });
});
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

const query = "Cake";

const loading = document.createElement("p");


loading.innerText = "Loading..."; // so that it could take the time to reload when api is called and within that this Loading will be shown in the screen


loading.style.fontWeight = "bold";


const logo = document.getElementById("logo");


const container = document.getElementById("container");


logo.addEventListener("click", () => {


  location.reload();

});

const india = document.getElementById("india");
const japan = document.getElementById("japan");
const china = document.getElementById("china");


function displayMeals(meals, title) { // function to display the item cards so that I don't have to independently make heading and print indivisually

  container.innerHTML = ""; 

  const heading = document.createElement("h3");

  heading.innerText = title;    // Heading to show the country

  heading.style.textAlign = "center";

  heading.style.width = "100%"; // so that no other item should come near to it 

  heading.style.textDecoration="underline";

  container.appendChild(heading); // posting it to body

  if (meals.length === 0) { // that means no such element is found

    const div = document.createElement("div");

    div.innerHTML = `<h3>Not Found</h3>`;

    container.appendChild(div); 

    return;
  }

  meals.forEach((item) => {


    const card = document.createElement("div"); // to show items in form of div(box)
    

    card.style.width = "220px"; 


    const image = document.createElement("img"); 


    image.src = item.img; // extracting image of the meal


    image.style.width = "300px";

    image.style.height="auto";

    image.style.borderRadius = "8px";

   image.addEventListener('mouseenter', () => { // think it as a hover in css


  image.style.transform = "translateY(-15px)";

  image.style.transition = "all 0.3s"

  image.style.boxShadow="0 0 50px #00c2e9"

  image.style.cursor="pointer";
  
});

image.addEventListener('mouseleave', () => {

  image.style.transform = "";

   image.style.boxShadow="";
});


image.addEventListener("click", () => { // making the images clickable

const link = document.createElement("a");

if((item.YoutubeLink))
{
  

link.href = item.YoutubeLink;

link.target = "_blank";

link.appendChild(image);

card.appendChild(link);
}


});

    const name = document.createElement("p");


    name.innerText = item.Meal;

    name.style.marginLeft="50px";

    card.append(image, name);

    

    container.appendChild(card);
    
  });
}


india.addEventListener("click", () => {


  container.appendChild(loading);

  fetchMeals(query).then((meal) => {

    loading.innerText = "";

    const indian = meal.filter((e) => e.Type === "Indian" || e.Type==="Dutch" || e.Type==="Egyptian" || e.Type==="Irish" || e.Type==="Malaysian" || e.Type==="Mexican" || e.Type==="Portuguese" || e.Type==="Argentinian" || e.Type==="Thai" || e.Type==="Turkish" || e.Type==="Uruguayan" || e.Type==="Australian" || e.Type=="Venezulan");


    displayMeals(indian, "Indian");
  });
});


japan.addEventListener("click", () => {


  container.appendChild(loading);

  fetchMeals(query).then((meal) => {


    loading.innerText = "";

    const japanese = meal.filter((e) => e.Type === "Japanese" || e.Type==="French" || e.Type==="Canadian" || e.Type==="Greek" || e.Type==="Moroccan" || e.Type==="Moroccan" || e.Type==="Moroccan" || e.Type==="Spanish" || e.Type==="Saudi Arabian" || e.Type==="Syrian" || e.Type==="Polish" || e.Type==="Ukrainian");

    displayMeals(japanese, "Japanese");
  });
});


china.addEventListener("click", () => {


  container.appendChild(loading);

  fetchMeals(query).then((meal) => {

    loading.innerText = "";


    const chinese = meal.filter((e) => e.Type === "Chinese" || e.Type==="British" || e.Type==="American" || e.Type==="Italian" || e.Type==="Kenyan" || e.Type=== "Jamaican" || e.Type==="Russian" || e.Type==="Slovakian" || e.Type==="Vietnamese" || e.Type==="Algerian" || e.Type==="Tunisian" || e.Type==="Filipino");


    displayMeals(chinese, "Chinese");
  });
});



const mode = document.getElementById("mode"); 

const body = document.getElementById("body");

mode.addEventListener("click", () => { // light and dark mode changer button


  if (mode.textContent === "Dark") {

    mode.textContent = "Light";
    body.style.color = "red";
    body.style.backgroundColor = "white";

  } 

  else {

    mode.textContent = "Dark";
    body.style.color = "white";
    body.style.backgroundColor = "black";

  }
});
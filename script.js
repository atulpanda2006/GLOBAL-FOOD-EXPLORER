async function getIP(ip) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${ip}`
    );

    const data = await res.json();

    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

getIP("Arrabiata");


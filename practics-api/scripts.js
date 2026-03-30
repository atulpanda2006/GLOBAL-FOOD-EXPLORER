const div = document.getElementById("container");
function call() {
  const api = "https://fakestoreapi.com/products";
  return fetch(api)
    .then((e) => {
      return e.json();
    })

    .then((e) => {
      console.log(e);
    })

    .catch((e) => {
      console.log(e);
    });
}

call();

const data = JSON.parse(localStorage.getItem("cart")) || [];

data.forEach(item => {
  const div = document.createElement("div");

  div.innerText = `${item.Meal} × ${item.qty}`;

  document.body.append(div);
});
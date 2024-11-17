import("./bootstrap.js");
const url = `https://fakestoreapi.com/products`;

async function getAllProducts() {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

function createCard({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) {
  return `<div class='card'>
        <span class='card_title'>${title}</span>
        <img class='card_image' src=${image} alt=${title}  />
        <span class='card_description'>${description}</span>
        <span>
        <span class='card_price'>${price}</span>
        <span class='card_category'>${category}</span> 
        </span>
    </div>`;
}

// getAllProducts();
// addAllProducts();

const mount = async (el) => {
  el.innerHTML = `<div>Loading...</div>`;
  const data = await getAllProducts();
  let ele = "";
  data.forEach((element) => {
    ele += createCard(element);
  });
  el.innerHTML = ele;
};
if (process.env.NODE_ENV === "development") {
  const root = document.getElementById("root");
  if (root) {
    mount(root);
  }
}

export { mount };

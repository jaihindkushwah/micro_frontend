// import { mount as productMount } from "products/ProductsIndex";
// import "cart/CartIndex";
// console.log("welcome to container");

// productMount(document.getElementById("my-product-root"));

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const mount = (el) => {
  const root = createRoot(el);
  root.render(<App />);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("container_root");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };

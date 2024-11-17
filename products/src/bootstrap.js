import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const mount = (el) => {
  const root = createRoot(el);
  root.render(<App />);
  return () => {
    root.unmount();
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("product_dev_root");
  if (devRoot) {
    mount(devRoot);
  }
}
export { mount };

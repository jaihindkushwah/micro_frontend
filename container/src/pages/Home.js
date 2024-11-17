import React, { lazy, Suspense } from "react";
// import Products from "../components/Products";
import { Link } from "react-router-dom";
const Products = lazy(() => import("../components/Products"));

function Home() {
  return (
    <div>
      <nav>
        <Link to={"/products"}>Products</Link>
      </nav>
      <h1>Home page</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Products />
      </Suspense>
    </div>
  );
}

export default Home;

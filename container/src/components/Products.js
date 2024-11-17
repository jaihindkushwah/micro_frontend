import React, { useRef, useEffect } from "react";
import { mount } from "products/ProductsIndex";
function Products() {
  const ref = useRef(null);
  useEffect(() => {
    const unmount = mount(ref.current);
    return () => {
      if (unmount) unmount();
    };
  }, []);
  return <div ref={ref}></div>;
}

export default Products;

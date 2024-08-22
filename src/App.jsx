import { useState, useEffect } from "react";
import menuItems from "./data/data.json";
import Cart from "./components/Cart";
import Desert from "./components/Desert";
import CartSummerize from "./components/CartSummerize";

function App() {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    setDesserts(menuItems);
  }, []);

  return (
    <main className="container w-11/12 mt-20 grid grid-cols-1 md:grid-cols-12 mb-10 gap-8">
      <div className="md:col-span-9">
        <div className="mb-5">
          <h1 className="text-5xl font-extrabold tracking-widest font-redhat mb-4">
            Desserts
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {desserts.length === 0 ? (
            <h1>No desserts in the Menu</h1>
          ) : (
            desserts.map((dessert, index) => (
              <Desert
                key={index}
                dessert={dessert}
              />
            ))
          )}
        </div>
      </div>
      <div className="md:col-span-3">
        <Cart />
      </div>
      <CartSummerize />
    </main>
  );
}
export default App;

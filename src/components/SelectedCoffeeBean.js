import { useContext } from "react";
import { CoffeeContext } from "../context/CoffeeContext";

const SelectedCoffeeBean = () => {
  const { coffeeBean: { name } } = useContext(CoffeeContext);

  return (
    <div className="selected-coffee">
      <h2>Current Selection: {name}</h2>
    </div>
  );
}

export default SelectedCoffeeBean;

import { useCoffee } from "../context/CoffeeContext";

const SelectedCoffeeBean = () => {
  const { coffeeBean: { name } } = useCoffee();

  return (
    <div className="selected-coffee">
      <h2>Current Selection: {name}</h2>
    </div>
  );
}

export default SelectedCoffeeBean;

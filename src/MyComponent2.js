import React, { useReducer } from "react";
import reducer from "./UseReducer/reducer";

const Counter = () => {
  const initialState = { count: 0, cart: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const addToCart = () => {
    const newItem = { id: state.count, name: `Item ${state.count + 1}` };
    dispatch({ type: "ADD_TO_CART", payload: newItem });
  };

  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <hr />

      <h2>Shopping Cart</h2>
      <ul>
        {state.cart.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>

      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Counter;

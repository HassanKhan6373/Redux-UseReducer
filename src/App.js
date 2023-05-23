import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import MyComponent from "./MyComponent";
import MyComponent2 from "./MyComponent2";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>My Redux App</h1>

        {/* <MyComponent /> */}
        <MyComponent2 />
      </div>
    </Provider>
  );
}

export default App;

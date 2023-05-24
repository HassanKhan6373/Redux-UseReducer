import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import { BrowserRouter } from "react-router-dom";
import SharedService from "./Use-ContextAPI/sharedservices";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <h1>My State Management App</h1>

          {/* <MyComponent /> */}
          <SharedService />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

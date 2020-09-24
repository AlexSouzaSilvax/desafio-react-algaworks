import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HomeView from "./views/Home.view";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persisedStore } from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persisedStore}>
        <HomeView />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

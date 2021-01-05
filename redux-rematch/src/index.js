import React from "react";
import ReactDOM from "react-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";

import App from "./App";
import {menu} from './models/menu';
import {posts} from './models/posts';

const store = init({
  models: {
    menu,
    posts,
  }
});

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.querySelector("#root"));

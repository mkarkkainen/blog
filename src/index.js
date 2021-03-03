import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

import App from "./components/App";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import styling from './styling/index';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(<ThemeProvider theme={styling}><App /></ThemeProvider>, document.getElementById("root"));

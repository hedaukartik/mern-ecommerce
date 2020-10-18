import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import App from "./App";
import "./assets/scss/style.scss";
import * as serviceWorker from "./serviceWorker";
import "react-toastify/dist/ReactToastify.css";
require("dotenv").config();

ReactDOM.render(
	<BreadcrumbsProvider>
		<Router>
			<App />
		</Router>
	</BreadcrumbsProvider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

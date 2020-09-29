import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import MetaTags from "react-meta-tags";
import SignUp from "./components/SignUp";
import Activation from "./components/Activation";
import ForgetPassword from "./components/ForgetPassword";
import SignIn from "./components/SignIn";
import Header from "./wrappers/header/Header";

function App() {
	return (
		<Fragment>
			<MetaTags>
				<title>Ecommerce Website</title>
				<meta name="description" content="React eCommerce template." />
			</MetaTags>
			<Header layout="container-fluid" />
			<Switch>
				<Route exact path="/" />
				<Route exact path="/signup" component={SignUp} />
				<Route exact path="/signin" component={SignIn} />
				<Route
					exact
					path="/users/activate/:token"
					component={Activation}
				/>
				<Route
					exact
					path="/users/password/forget"
					component={ForgetPassword}
				/>
			</Switch>
		</Fragment>
	);
}

export default App;

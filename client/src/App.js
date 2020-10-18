import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import MetaTags from "react-meta-tags";
import SignUp from "./components/SignUp";
import Activation from "./components/Activation";
import ForgetPassword from "./components/ForgetPassword";
import SignIn from "./components/SignIn";
import Header from "./wrappers/header/Header";
import HomeLayout from "./layouts/HomeLayout";
import AboutLayout from "./layouts/AboutLayout";
import Footer from "./wrappers/footer/Footer";
function App() {
	return (
		<Fragment>
			<MetaTags>
				<title>Ecommerce Website</title>
				<meta name="description" content="React eCommerce template." />
			</MetaTags>
			<Header layout="container-fluid" />
			<Switch>
				<Route exact path="/" component={HomeLayout} />
				<Route exact path="/about" component={AboutLayout} />
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
			<Footer spaceTopClass="pt-100" spaceBottomClass="pb-70" /> 
		</Fragment>
	);
}

export default App;

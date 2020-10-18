import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import AboutUsOne from "../components/about-us/AboutUsOne";
import AboutUsContact from "../components/about-us/AboutUsContact"


const AboutLayout = ({ location }) => {
    const { pathname } = location;
    const layoutName = 'about us';
    const bgImageUrl = 'assets/images/breadcrumb/about.jpg';
	return (
		<Fragment>
			<MetaTags>
				<title>Ecom | Design About Us</title>
				<meta
					name="description"
					content="Design home of Ecom eCommerce."
				/>
			</MetaTags>
			<BreadcrumbsItem to="/">Home</BreadcrumbsItem>
			<BreadcrumbsItem to={`${pathname}`}>{layoutName}</BreadcrumbsItem>
            <Breadcrumb layoutName={layoutName} bgImageUrl={bgImageUrl}/>
            <AboutUsOne />
            <AboutUsContact />
		</Fragment>
	);
};

export default AboutLayout;

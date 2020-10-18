import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import ContactUsInformation from "../components/contact-us/ContactUsInformation";
import ContactUsForm from "../components/contact-us/ContactUsForm";

const ContactUsLayout = ({ location }) => {
    const { pathname } = location;
    const layoutName = 'contact us';
    const bgImageUrl = 'assets/images/breadcrumb/about.jpg';
	return (
		<Fragment>
			<MetaTags>
				<title>Ecom | Design Contact Us</title>
				<meta
					name="description"
					content="Design home of Ecom eCommerce."
				/>
			</MetaTags>
			<BreadcrumbsItem to="/">Home</BreadcrumbsItem>
			<BreadcrumbsItem to={`${pathname}`}>{layoutName}</BreadcrumbsItem>
            <Breadcrumb layoutName={layoutName} bgImageUrl={bgImageUrl}/>
            <ContactUsInformation />
            <ContactUsForm />
		</Fragment>
	);
};

export default ContactUsLayout;
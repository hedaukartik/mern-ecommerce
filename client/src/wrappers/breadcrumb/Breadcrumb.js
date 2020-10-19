import React from "react";
import { NavLink } from "react-router-dom";
import { Breadcrumbs } from "react-breadcrumbs-dynamic";

const Breadcrumb = ({ layoutName, bgImageUrl }) => {
	return (
		<div
			className={`breadcrumb-area pt-140 pb-35 bg-black`}
			style={{
				backgroundImage: `url(${bgImageUrl})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center center",
			}}
		>
			<div className="container">
				<div className="breadcrumb-content text-center">
					<h2>{layoutName}</h2>
					<Breadcrumbs
						separator={<span>/</span>}
						item={NavLink}
						finalItem={"span"}
					/>
				</div>
			</div>
		</div>
	);
};

export default Breadcrumb;

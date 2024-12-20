import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<div className="bg-black mt-[120px] py-11">
			<div className="container2 flex flex-wrap md:flex-nowrap gap-2 flex-row justify-between items-start">
				<div className="w-full sm:w-auto">
					<Link href={"/"}>
						<h1 className="text-[36px] sm:text-[42px] lg:text-[52px] font-normal text-[#F7F7F4] marcellus">
							INFO NEWS
						</h1>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;

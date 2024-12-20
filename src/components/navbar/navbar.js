"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export const Navbar = () => {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		// Set initial search term from query params
		if (router?.query?.search) {
			setSearchTerm(router?.query?.search);
		}
	}, [router?.query?.search]);

	const handleSearch = (e) => {
		e.preventDefault();
		if (searchTerm.trim()) {
			router.push(`/?search=${encodeURIComponent(searchTerm.trim())}`);
		}
	};

	return (
		<div className="bg-black flex flex-col sm:flex-row items-center justify-between mb-[47px]">
			<div>
				<Link href={"/"}>
					<h1 className="text-[36px] marcellus sm:text-[42px] lg:text-[52px] font-normal text-[#F7F7F4]">
						INFO NEWS
					</h1>
				</Link>
			</div>
		</div>
	);
};

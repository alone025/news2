"use client";
import React, { useEffect, useState } from "react";
import MainPage from "./mainPage";
import { Navbar } from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const Home = () => {
	const [search, setSearch] = useState("");

	const updateSearchFromUrl = () => {
		if (typeof window !== "undefined") {
			// Ensure we're in a browser environment
			const searchParams = new URLSearchParams(window.location.search);
			const searchQuery = searchParams.get("search") || "";
			setSearch(searchQuery);
		}
	};

	useEffect(() => {
		// Initialize search state from URL on page load
		updateSearchFromUrl();
	});

	return (
		<main>
			<div
				className={`bg-black absolute top-0 left-0 w-full ${
					search ? "h-[180px]" : "h-[479px]"
				}`}
			></div>

			<div className="container2 z-20 relative">
				<Navbar />

				<MainPage />
			</div>
			<Footer />
		</main>
	);
};

export default Home;

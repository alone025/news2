"use client";
import CategorySelector from "@/components/categorySelector/categorySelector";
import Latest from "@/components/latest/latest";
import Loader from "@/components/loader";
import Popular from "@/components/popular/popular";
import TopCards from "@/components/topCards/topCards";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MainPage() {
	const [selectedCategory, setSelectedCategory] = useState("");
	const [selectedCategoryID, setSelectedCategoryID] = useState("");

	const [search, setSearch] = useState("");

	useEffect(() => {
		const savedCategory = localStorage.getItem("category");
		if (savedCategory) {
			setSelectedCategory(savedCategory);
		}
	}, []);

	const handleCategoryChange = (category, id) => {
		setSelectedCategory(category);
		setSelectedCategoryID(id);
		localStorage.setItem("category", category);
		localStorage.setItem("categoryId", id);
	};

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

		localStorage.setItem("category", "Главная");
		localStorage.setItem("categoryId", "glavniy");

		setTimeout(() => {
			setLoading(false)
		}, 450);
	});

	const [loading, setLoading] = useState(true)

	return (
		<div>

			{
				loading
				&&
				<Loader/>
			}

			<CategorySelector
				onSelect={handleCategoryChange}
				selectedCategory={selectedCategory}
			/>
			{!search && <TopCards />}

			<div className="flex flex-col md:flex-row gap-6">
				<div className="latest w-full">
					<Latest ctg={selectedCategory} ctgID={selectedCategoryID} />
				</div>
				<div className="popular md:max-w-[410px] w-full">
					<Popular />
				</div>
			</div>
		</div>
	);
}

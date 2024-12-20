import React, { useEffect, useState } from "react";
import CardWImg from "../cardWImg/cardWImg";
import { useRouter } from "next/navigation";
import { fetchPosts } from "@/utils/api";

const Latest = ({ ctg, ctgID }) => {
	const [category, setCategory] = useState("");
	const [articles, setArticles] = useState([]);
	const [filteredArticles, setFilteredArticles] = useState([]);
	const [search, setSearch] = useState("");
	const router = useRouter();

	// Fetch all posts when the component mounts
	useEffect(() => {
		const loadArticles = async () => {
			const data = await fetchPosts();
			setArticles(data.slice(2));
			setFilteredArticles(data);
		};
		loadArticles();
	}, []);

	useEffect(() => {
		const updateFilteredArticles = () => {
			const currentCategory =
				ctg || localStorage.getItem("category") || "";
			const currentCategoryID =
				ctgID || localStorage.getItem("categoryId") || "";

			if (!currentCategory || !currentCategoryID) {
				setFilteredArticles([]);
				return;
			}

			setCategory(currentCategory);

			if (currentCategory === "Главная") {
				setFilteredArticles(articles);
			} else if (currentCategoryID !== "glavniy") {
				const filtered = articles.filter(
					(article) => article.category._id === currentCategoryID
				);
				setFilteredArticles(filtered);
			} else {
				setFilteredArticles(articles);
			}
		};

		updateFilteredArticles();
	}, [ctg, ctgID, articles]);

	useEffect(() => {
		const updateSearchFromUrl = () => {
			if (typeof window !== "undefined" && window.location.search) {
				try {
					const searchParams = new URLSearchParams(
						window.location.search
					);
					const searchQuery = searchParams.get("search") || "";
					setSearch(searchQuery);
				} catch (error) {
					console.error("Invalid search parameters in URL:", error);
					setSearch(""); // Fallback to an empty search query
				}
			}
		};

		updateSearchFromUrl();

		if (router && router.events) {
			router.events.on("routeChangeComplete", updateSearchFromUrl);
			return () => {
				router.events.off("routeChangeComplete", updateSearchFromUrl);
			};
		}
	});

	return (
		<div className="mt-[30px]">
			<div className="lg sm:px-6 flex flex-row gap-4 items-center">
				<h2 className="georama text-[26px] md:text-[32px] font-semibold text-[#1A1A1A]">
					{!search
						? category === "Главная"
							? "Последние"
							: category || "Последние"
						: search}
				</h2>

				<div className="line h-[2px] bg-[#1A1A1A] w-full"></div>
			</div>

			<div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 mt-[30px]">
				{Array.isArray(filteredArticles) &&
				filteredArticles?.length > 0 ? (
					filteredArticles?.map((article, index) => (
						<div key={index}>
							<CardWImg
								imgN={article.image}
								data={article}
								key={index}
							/>
						</div>
					))
				) : (
					<h3 className="georama text-xl text-center">
						
					</h3>
				)}
			</div>
		</div>
	);
};

export default Latest;

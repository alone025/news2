import React, { useEffect, useState } from "react";
import { PopularCard } from "./popularCard";
import { fetchPosts } from "@/utils/api";

const Popular = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		const loadArticles = async () => {
			const data = await fetchPosts();
			const filterData = data?.filter(
				(cke) => cke.category.name === "Популярные"
			);
			setArticles(filterData);
		};
		loadArticles();
	}, []);

	return (
		<div className="bg-white mt-[30px]">
			<div className="py-5 px-6 flex flex-row justify-between">
				<h3 className="text-xl text-[#1A1A1A] georama font-normal">
					Популярные
				</h3>
				<button className="py-[7px] px-[15px] bg-[#1A1A1A] rounded-[5px] text-[#FDFDFD] georama font-normal text-[14px]">
					Показать все
				</button>
			</div>

			<div className="linediv px-6">
				<div className="line w-full h-[2px] bg-[#F1F0F0] rounded-full"></div>
			</div>

			<div className="flex flex-col px-6">
				{articles.reverse().slice(0, 10).map((c, ckey) => (
					<PopularCard key={ckey} data={c} />
				))}
			</div>
		</div>
	);
};

export default Popular;

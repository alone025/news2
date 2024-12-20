"use client";

import { fetchCategories } from "@/utils/api";
import { useEffect, useState } from "react";

export default function CategorySelector({ selectedCategory, onSelect }) {
	const [categories, setCategories] = useState([
		"Главная",
		"Мир",
		"Экономика",
		"IT Технологии",
		"Бизнес",
		"Путишествия",
		"Климат",
	]);

	const [currentData, setCurrentData] = useState("");

	useEffect(() => {
		const loadCategories = async () => {
			const data = await fetchCategories();
			setCategories(data);
		};

		loadCategories();
	}, []);

	useEffect(() => {
		const currentdateNew = new Date();

		const time =
			currentdateNew.getHours() + ":" + currentdateNew.getMinutes();

		setCurrentData(time);
	}, []);

	return (
		<div className="bg-[#1A1A1A] px-4 md:px-8 lg:px-[50px] flex flex-row justify-between items-center">
			<div className="flex lg:gap-4 font-normal overflow-auto gap-1">
				<button
					onClick={() => onSelect("Главная", "glavniy")}
					className={`px-[9px] min-w-auto lg:min-w-[85px] py-3 text-[17px] font-normal leading-[17px] text-[#FDFDFD] ${
						selectedCategory === "Главная" ? "bg-[#04594D]" : ""
					}`}
				>
					Главная
				</button>
				{categories?.map((category, cKey) => (
					<button
						key={cKey}
						onClick={() => onSelect(category.name, category._id)}
						className={`px-[9px] min-w-auto lg:min-w-[85px] py-3 text-[17px] hover:bg-[#04594D] font-normal leading-[17px] text-[#FDFDFD] ${
							selectedCategory === category.name
								? "bg-[#04594D]"
								: ""
						}`}
					>
						{category.name}
					</button>
				))}
			</div>
			<div className="hidden sm:flex flex-row pl-2 md:pl-1 lg:pl-0 gap-3 lg:gap-4">
				<p className="text-[17px] aboreto text-[#FDFDFD] font-normal">
					{currentData || "12:48"}
				</p>
			</div>
		</div>
	);
}

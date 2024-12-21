import React, { useEffect, useState } from "react";
import img from "../../../public/tramp2.png";
import img2 from "../../../public/tr3.svg";
import Image from "next/image";
import { baseUrl, fetchPosts } from "@/utils/api";
import { formatTime } from "@/utils/formatData";
import Link from "next/link";

const TopCards = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		const loadArticles = async () => {
			const data = await fetchPosts();
			const filterData = data;

			setArticles(filterData);
		};
		loadArticles();
	}, []);

	return (
		<div className="bg-white flex flex-col md:flex-row pb-6">
			<div className="p-4 w-full flex flex-col">
				<Link href={`/news/${articles[0]?._id}`}>
					<div className="relative h-full">
						<div className="bg-rgb-black absolute h-full w-full left-0 top-0"></div>
						<div className="h-full">
							<Image
								src={`${baseUrl}/photos/${articles[0]?.image}`}
								width={650}
								height={400}
								alt="Картинка"
								className="h-[350px] w-full object-cover"
							/>
						</div>

						<div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 pr-6">
							<h3 className="georama font-bold transition-all hover:underline cursor-pointer text-[#F7F7F4] text-lg sm:text-xl md:text-2xl mb-0">
								{articles[0]?.title}
							</h3>
							<p className="heebo font-medium text-[#FDFDFD] text-[14px] flex flex-row gap-2 mt-1 md:mt-1">
								<span>INFO NEWS</span>
								{"|"}
								<span>{articles[0]?.date}</span>
							</p>
						</div>
					</div>
				</Link>

				<Link href={`/news/${articles[0]?._id}`}>
					<div className="mt-2 ml-2 flex flex-col gap-[2px]">
						<p className="georama font-bold text-[17px] text-[#000]">
							{articles[0]?.subtitle}
						</p>
						<p className="text-[#252525] text-[15px] georama font-normal">
							{articles[0]?.description.slice(0, 50)}
						</p>
					</div>	
				</Link>
			</div>

			<div className="w-full relative">
				<Link href={`/news/${articles[1]?._id}`}>
					<div className="tope-c bg-[#1A1A1A] pt-0 p-6 flex gap-4 flex-col-reverse lg:flex-row">
						<div className="w-[180px]">
							<h4 className="georama max-w-[296px] mt-2 hover:cursor-pointer transition-all hover:underline text-lg md:text-xl font-bold text-[#F7F7F4]  bottom-2 md:bottom-4 left-2 md:left-4 w-full">
								{articles[1]?.title}
							</h4>
							<p className="opacity-80 leading-normal text-[#fff] georama w-full lg:max-w-[192px] pt-[2px]">
								{articles[1]?.subtitle}
							</p>
							<p className="text-[#fff] opacity-75 text-[15px] georama font-normal">
								{articles[1]?.description.slice(0, 50)}
							</p>
						</div>
						<div className="relative w-full flex-1">
							<Image
								src={`${baseUrl}/photos/${articles[1]?.image}`}
								width={650}
								height={400}
								alt="tramp"
								className="w-full h-[295px] object-cover"
							/>
						</div>
					</div>
				</Link>

				<Link href={`/news/${articles[2]?._id}`}>
					<div className="mt-[15px] pl-6 md:pl-0 pr-6">
						<div className="flex flex-col gap-1 mb-[10px] pr-3">
							<h3 className="text-xl transition-all hover:cursor-pointer hover:text-[#04594D] georama font-bold text-[#000000]">
								{articles[2]?.title}
							</h3>
							<p className="heebo text-[#676767] text-[13px] font-medium flex flex-row gap-2">
								<span>INFO NEWS</span>
								{"|"}
								<span>{articles[2]?.date}</span>
							</p>
						</div>

						<div className="mr-3">
							<div className="line w-full h-[2px] rounded-full bg-[#F1F0F0]"></div>
						</div>

						<p className="mt-1 text-[#04594D] georama text-base font-normal cursor-pointer pr-3">
							{articles[2]?.description.slice(0, 50)}
						</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default TopCards;

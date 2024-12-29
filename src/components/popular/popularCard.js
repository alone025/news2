import Image from "next/image";
import React from "react";
import img from "../../../public/osmon.svg";
import { formatDate } from "@/utils/formatData";
import { baseUrl } from "@/utils/api";

export const PopularCard = ({ data }) => {

	const handleNavigate = (id) => {
		if (typeof window !== 'undefined') {
		  window.open(`/news/${id}`, '_blank');
		}
	  };

	return (
		<div className="cursor-pointer" onClick={() => handleNavigate(data._id)}>
			<div className="py-6 flex flex-col md:flex-row gap-4">
				<div className="min-w-[140px]">
					<Image
						src={data?.image ? `${baseUrl}/photos/${data.image}` : '/placeholder.jpg'}
						alt={data?.title || "News image"}
						width={300}
						height={300}
						className="w-[150px] rounded-md"
					/>
				</div>
				<div className="flex flex-col justify-between">
					<div className="flex flex-col gap-[4px]">
						<h4 className="text-[#1A1A1A] text-[18px] georama font-normal leading-[normal]">
							{data.title ||
								"Новости США, Трамп стал президетном"}
						</h4>
						<p className="text-[#04594D] text-[14px] font-normal georama leading-[normal]">
							{data.subtitle ||
								"Новости США Трамп стал президентом США, Новости США Трамп стал президентом США, Новости США Трамп стал президентом США, Новости США Трамп стал президентом США,"}
						</p>
					</div>
					<div>
						<p className="text-[#676767] text-[12px] items-center mt-2 heebo font-medium flex flex-row justify-between gap-2 leading-[normal]">
							<span className="leading-[normal]">Info News</span>
							{"|"}
							<span className="leading-[normal]">
								{"  "}
								{formatDate(data.createdAt) || "Feb. 4, 2023"}
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

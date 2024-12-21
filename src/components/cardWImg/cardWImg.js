import React from "react";
import img from "../../../public/hindi.jpg";
import Image from "next/image";
import { baseUrl } from "@/utils/api";
import { formatDateToRussian } from "@/utils/formatData";
import Link from "next/link";

const CardWImg = ({ imgN, data }) => {
	return (
		<Link href={`/news/${data._id}`}>
			<div className="relative w-full lg:max-w-[390px] h-max min-h-[340px]">
				<div className="bg-rgb-black absolute h-full w-full left-0 top-0"></div>
				<Image
					src={data?.image ? `${baseUrl}/photos/${data.image}` : '/placeholder.jpg'}
					width={650}
					height={400}
					alt={data?.title || "News image"}
					className="lg:max-w-[390px] z-10 rounded-md w-full h-full min-h-[340px] object-cover"
				/>

				<div className="flex flex-col gap-3 absolute left-4 bottom-4">
					<h3 className="georama text-[#FDFDFD] text-xl font-normal leading-[normal] md:leading-normal hover:underline hover:cursor-pointer transition-all max-w-[360px]">
						{data.title ||
							"Pervez Musharraf, Former Military Ruler of Pakistan, Dies at 79"}
					</h3>
					<p className="text-[#FDFDFD] text-[10px] heebo font-medium flex flex-row gap-2">
						<span>От Info News</span>
						{"|"}
						<span>
							{formatDateToRussian(data.createdAt) ||
								"Feb. 4, 2023"}
						</span>
					</p>
				</div>
			</div>
		</Link>
	);
};

export default CardWImg;

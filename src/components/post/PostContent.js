"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { baseUrl, fetchPost } from "@/utils/api";
import { formatDateDDMMYYYY } from "@/utils/formatData";
import Head from "next/head";

export default function PostContent({ initialData, slug }) {
	const [dt, setDT] = useState(initialData);
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		const loadData = async () => {
			const newD = await fetchPost(slug);
			setDT(newD);
		};
		if (!initialData) {
			loadData();
		}
	}, [slug, initialData]);

	const handleCopy = () => {
		const currentUrl = window.location.href;
		navigator.clipboard
			.writeText(currentUrl)
			.then(() => {
				setCopied(true);
				setTimeout(() => setCopied(false), 2000);
			})
			.catch((err) => console.error("Failed to copy text: ", err));
	};

	return (
		<>
			<Head>
				<title>{dt?.title || "Loading..."}</title>

				{/* {dt?.image && (
                    <link
                        rel="icon"
                        href={`${baseUrl}/photos/${dt.image}`}
                        type="image/jpg"
                    />
                )}
         
                    <link
                        rel="favicon"
                        href={`${baseUrl}/photos/${dt?.image}`}
                        type="image/jpg"
                    />
            

                    <link
                        rel="icon"
                        type="image/x-icon" 
                        href={`${baseUrl}/photos/${dt?.image}`}
                    /> */}

				<desc>{dt?.subtitle}</desc>
			</Head>
			<div className="pb-10 min-h-screen">
				<div className="relative w-full">
					<Image
						src={`${baseUrl}/photos/${dt?.image}`}
						width={2000}
						height={800}
						alt="header"
						className="w-full h-96 object-cover"
					/>
					<Link
						href={"/"}
						className="p-4 rounded-[30px] bg-white absolute top-6 right-6 cursor-pointer"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="19"
							height="19"
							viewBox="0 0 19 19"
							fill="none"
						>
							<rect
								x="0.000244141"
								y="17.4164"
								width="24.6305"
								height="2.23914"
								transform="rotate(-45 0.000244141 17.4164)"
								fill="#1A1A1A"
							/>
							<rect
								x="1.58325"
								width="24.6305"
								height="2.23914"
								transform="rotate(45 1.58325 0)"
								fill="#1A1A1A"
							/>
						</svg>
					</Link>
				</div>

				<div className="flex flex-col container2 !mt-6">
					<h2 className="text-[26px] text-[#1A1A1A] georama font-bold">
						{dt?.title || ""}
					</h2>
					<h2 className="text-[22px] text-[#1a1a1abd] georama">
						{dt?.subtitle || ""}
					</h2>
					<div className="flex flex-row justify-between items-center">
						<p className="text-xs text-[#1A1A1A] heebo font-medium">
							{formatDateDDMMYYYY(dt?.createdAt) || ""}
						</p>
						<svg
							className="cursor-pointer"
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="none"
							onClick={handleCopy}
						>
							<rect
								width="32"
								height="32"
								rx="16"
								fill="#F5F5F5"
							/>
							{copied ? (
								<path
									d="M12 16.5L15 20L20.5 12"
									stroke="#04594D"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							) : (
								<path
									d="M19.7866 8.32001C21.2823 8.32001 22.4947 9.57424 22.4947 11.1214C22.4947 12.6686 21.2823 13.9228 19.7866 13.9228C18.9901 13.9228 18.2739 13.5671 17.7784 13.0008L14.2531 15.0844C14.333 15.3487 14.376 15.6299 14.376 15.9214C14.376 16.213 14.333 16.4941 14.2531 16.7584L17.7777 18.8428C18.2732 18.276 18.9897 17.92 19.7866 17.92C21.2823 17.92 22.4947 19.1742 22.4947 20.7214C22.4947 22.2686 21.2823 23.5228 19.7866 23.5228C18.291 23.5228 17.0786 22.2686 17.0786 20.7214C17.0786 20.4299 17.1216 20.1487 17.2015 19.8844L13.6769 17.8C13.1814 18.3668 12.4649 18.7228 11.668 18.7228C10.1724 18.7228 8.95996 17.4686 8.95996 15.9214C8.95996 14.3742 10.1724 13.12 11.668 13.12C12.4645 13.12 13.1807 13.4757 13.6762 14.042L17.2015 11.9585C17.1216 11.6941 17.0786 11.413 17.0786 11.1214C17.0786 9.57424 18.291 8.32001 19.7866 8.32001ZM19.7866 19.12C18.9317 19.12 18.2386 19.837 18.2386 20.7214C18.2386 21.6059 18.9317 22.3228 19.7866 22.3228C20.6415 22.3228 21.3347 21.6059 21.3347 20.7214C21.3347 19.837 20.6415 19.12 19.7866 19.12ZM11.668 14.32C10.813 14.32 10.12 15.037 10.12 15.9214C10.12 16.8059 10.813 17.5228 11.668 17.5228C12.5229 17.5228 13.216 16.8059 13.216 15.9214C13.216 15.037 12.5229 14.32 11.668 14.32ZM19.7866 9.52001C18.9317 9.52001 18.2386 10.237 18.2386 11.1214C18.2386 12.0059 18.9317 12.7228 19.7866 12.7228C20.6415 12.7228 21.3347 12.0059 21.3347 11.1214C21.3347 10.237 20.6415 9.52001 19.7866 9.52001Z"
									fill="#1A1A1A"
								/>
							)}
						</svg>
					</div>
				</div>

				<div className="container2">
					<div className="line h-[2px] w-full bg-[#F1F0F0] rounded-full mb-6 mt-2"></div>
				</div>

				<div className="container2">
					<p className="text-xl georama font-normal text-[#1A1A1A]">
						{dt?.description}
					</p>
				</div>
			</div>
		</>
	);
}

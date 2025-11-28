"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type HeroTexts = {
	title: string;
	subtitle: string;
	poem: string;
	cta1: string;
};

export default function HeroSection({ texts }: { texts: HeroTexts }) {
	// --- ここからスライドショー ---
	const sliderImages = [
	"/covers/hero-slide-image-1.jpg", // ← Exploring Worlds
	"/covers/hero-slide-image-2.jpg", // ← Reading His Own Adventure
	"/covers/hero-slide-image-3.jpg", // ← Reading His Own Adventure
	"/covers/hero-slide-image-4.jpg", // ← Reading His Own Adventure
	];
	
	const [index, setIndex] = useState(0);
	
	useEffect(() => {
			const timer = setInterval(() => {
					setIndex((prev) => (prev + 1) % sliderImages.length);
			}, 5000); // 5秒ごと切り替え
			return () => clearInterval(timer);
	}, []);
	
	return (
		<section className="w-full pt-10 pb-10 text-center">
		{/* ▼ タイトル */}
		<h1 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
		{texts.title}
		</h1>
		
		{/* ▼ サブタイトル */}
		<p className="mt-3 text-neutral-700">{texts.subtitle}</p>
		
		{/* ▼ 詩のような文 */}
		<p
		className="text-neutral-600"
		dangerouslySetInnerHTML={{ __html: texts.poem }}
		/>
		
		{/* ▼ CTA ボタン */}
		<div className="mt-6 flex justify-center">
		<a
		href="#book"
		className="
		rounded-full px-6 py-2 border border-neutral-300
		text-neutral-800 text-sm shadow-sm hover:bg-neutral-50
		"
		>
		{texts.cta1}
		</a>
		</div>
		
		{/* ▼ スライド画像 */}
		<div className="relative w-full mt-8 flex justify-center">
		<div className="w-full max-w-3xl">
		{sliderImages.map((src, i) => (
					<Image
					key={i}
					src={src}
					alt="Hero slide"
					width={1200}   // 元画像の比率に近い値（16:9 なら 1200x675 など）
					height={675}
					priority={i === 0}
					className={`
						w-full h-auto rounded-3xl object-contain
						transition-opacity duration-1000
						${i === index ? "opacity-100 relative" : "opacity-0 absolute inset-0"}
					`}
					/>
		))}
		</div>
		</div>
		
		</section>
	);
}

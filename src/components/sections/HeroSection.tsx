"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type HeroTexts = {
	title: string;
	subtitle: string;
	poem: string;
	cta1: string;
};

type HeroSectionProps = {
	texts?: HeroTexts; // ← optional にする
};

const FALLBACK_TEXTS: HeroTexts = {
	title: "",
	subtitle: "",
	poem: "",
	cta1: "",
};

export default function HeroSection({ texts = FALLBACK_TEXTS }: HeroSectionProps) {
	// --- スライドショー ---
	const sliderImages = [
	"/covers/hero-slide-image-1.jpg",
	"/covers/hero-slide-image-2.jpg",
	"/covers/hero-slide-image-3.jpg",
	"/covers/hero-slide-image-4.jpg",
	];
	
	const [index, setIndex] = useState(0);
	
	useEffect(() => {
			const timer = setInterval(() => {
					setIndex((prev) => (prev + 1) % sliderImages.length);
			}, 5000);
			return () => clearInterval(timer);
	}, []);
	
	// 実際に使うテキスト（undefined のときは FALLBACK_TEXTS）
	const t = texts ?? FALLBACK_TEXTS;
	
	return (
		<section
		id="hero"
		className="w-full pt-12 pb-16"
		>
		<div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2 md:items-center px-4">
		{/* ▼ 左側：タイトル・文章・ボタン */}
		<div className="text-left space-y-4">
		{/* タイトル */}
		<h1 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
		{t.title}
		</h1>
		
		{/* サブタイトル */}
		<p className="text-lg md:text-xl text-neutral-700">
		{t.subtitle}
		</p>
		
		{/* 詩文（HTMLあり） */}
		<p
		className="text-neutral-600 leading-relaxed"
		dangerouslySetInnerHTML={{ __html: t.poem }}
		/>
		
		{/* CTA */}
		<div className="pt-2">
		<a
		href="#book"
		className="
		inline-block rounded-full px-6 py-2 border border-neutral-300
		text-neutral-800 text-sm shadow-sm hover:bg-neutral-50
		"
		>
		{t.cta1}
		</a>
		</div>
		</div>
		
		{/* ▼ 右側：スライド画像 */}
		<div className="md:justify-self-end w-full">
		<div className="relative w-full max-w-xl mx-auto aspect-[4/3] rounded-3xl overflow-hidden bg-white shadow-none">
		{sliderImages.map((src, i) => (
					<Image
					key={i}
					src={src}
					alt="Hero slide"
					fill
					priority={i === 0}
					className={`
						absolute inset-0 w-full h-full
						object-contain rounded-3xl
						transition-opacity duration-1000
						${i === index ? "opacity-100" : "opacity-0"}
					`}
					/>
		))}
		</div>
		</div>
		</div>
		</section>
	);
}

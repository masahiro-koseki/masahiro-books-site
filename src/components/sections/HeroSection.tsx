// components/sections/HeroSection.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BookOpen, Images } from "lucide-react";

type HeroTexts = {
	title: string;
	subtitle: string;
	poem: string;
	cta1: string;
	cta2: string;
};

type HeroSectionProps = {
	texts: HeroTexts;
	scrollTo: (id: string) => void;
};

export default function HeroSection({ texts, scrollTo }: HeroSectionProps) {
	const heroImage = "/books/stoat-part2/sample-1.jpg"; // ←お好みで差し替え
	
	return (
		<section className="pt-14 pb-12">
		<div className="mx-auto max-w-5xl px-4 text-center">
		
		{/* ▼ タイトル */}
		<h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
		{texts.title}
		</h1>
		
		{/* ▼ サブタイトル */}
		<p className="mt-3 text-sm sm:text-base text-neutral-700">
		{texts.subtitle}
		</p>
		
		{/* ▼ リード文（poem） */}
		<p
		className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-700"
		dangerouslySetInnerHTML={{ __html: texts.poem }}
		/>
		
		{/* ▼ ボタン2つ */}
		<div className="mt-6 flex flex-wrap justify-center gap-4">
		<Button
		onClick={() => scrollTo("book")}
		className="rounded-full px-6 py-2 flex items-center gap-2"
		>
		<BookOpen className="h-4 w-4" />
		{texts.cta1}
		</Button>
		
		<Button
		variant="outline"
		onClick={() => scrollTo("portfolio")}
		className="rounded-full px-6 py-2 flex items-center gap-2 border-neutral-300 text-neutral-800"
		>
		<Images className="h-4 w-4" />
		{texts.cta2}
		</Button>
		</div>
		
		{/* ▼ 横長ヒーロー画像 */}
		<div className="mt-10">
		<div className="relative mx-auto max-w-3xl aspect-[16/9] rounded-3xl overflow-hidden shadow-md bg-neutral-200">
		<Image
		src={heroImage}
		alt="Hero background"
		fill
		className="object-contain"
		priority
		/>
		{/* 軽いグラデーション（好みで削除可） */}
		<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/0" />
		</div>
		</div>
		</div>
		</section>
	);
}

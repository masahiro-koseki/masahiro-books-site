// src/components/sections/HeroSection.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

type HeroTexts = {
	title: string;
	subtitle: string;
	poem: string;
	cta1: string; // 「本の一覧を見る」
	cta2: string; // いまは使っていないが、型だけ残しておく
};

type HeroSectionProps = {
	texts: HeroTexts;
	scrollTo: (id: string) => void;
};

export default function HeroSection({ texts, scrollTo }: HeroSectionProps) {
	// ★ ヒーロー画像：お好みでパスを差し替え可
	const heroImage = "/covers/hero-image-2.jpg";
	
	return (
		<section className="pt-4 pb-4">
		<div className="mx-auto max-w-5xl px-4 text-center">
		{/* タイトル */}
		<h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900">
		{texts.title}
		</h1>
		
		{/* サブタイトル */}
		<p className="mt-3 text-sm sm:text-base text-neutral-700">
		{texts.subtitle}
		</p>
		
		{/* リード文（poem） */}
		<p
		className="mt-4 text-sm sm:text-base leading-relaxed text-neutral-700"
		dangerouslySetInnerHTML={{ __html: texts.poem }}
		/>
		
		{/* ボタン：本の一覧へ 1つだけ */}
		<div className="mt-6 flex justify-center">
		<Button
		variant="outline"
		onClick={() => scrollTo("book")}
		className="rounded-full px-6 py-2 flex items-center gap-2 border-neutral-300 text-neutral-800"
		>
		<BookOpen className="h-4 w-4" />
		{texts.cta1}
		</Button>
		</div>
		
		{/* 横長ヒーロー画像 */}
		<div className="mt-6">
		<div className="relative mx-auto max-w-3xl aspect-[16/9] rounded-xl overflow-hidden shadow-none">
		<Image
		src={heroImage}
		alt="Hero preview"
		fill
		className="object-contain"
		priority
		/>
		</div>
		</div>
		</div>
		</section>
	);
}

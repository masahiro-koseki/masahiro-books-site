"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
	// 書籍カバーを横並びにするためのリスト
	const covers = [
	{
		src: "/covers/stoat-part2.jpg",
		alt: "Stoat's Big Mountain Adventure Part 2",
	},
	{
		src: "/covers/stoat-part3.jpg",
		alt: "Stoat's Big Mountain Adventure Part 3",
	},
	{
		src: "/covers/wildbirds-7.jpg",
		alt: "Japanese Wild Birds Series 7",
	},
	{
		src: "/covers/castles.jpg",
		alt: "Castles of Japan",
	},
	];
	
	return (
		<div className="mx-auto max-w-5xl space-y-8 text-center">
		{/* 上段：タイトル＋テキスト */}
		<motion.div
		initial={{ opacity: 0, y: 8 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.6 }}
		className="space-y-4"
		>
		<h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 leading-tight">
		{texts.title}
		</h1>
		
		<p className="text-base md:text-lg text-neutral-600 leading-relaxed">
		{texts.subtitle}
		</p>
		
		{texts.poem && (
				<p
				className="text-sm text-neutral-500 leading-relaxed"
				dangerouslySetInnerHTML={{ __html: texts.poem }}
				/>
		)}
		</motion.div>
		
		{/* 中段：ボタン */}
		<div className="flex flex-wrap justify-center gap-3">
		<Button
		className="rounded-full"
		onClick={() => scrollTo("book")}
		>
		{texts.cta1}
		</Button>
		
		<Button
		variant="outline"
		className="rounded-full"
		onClick={() => scrollTo("book")}
		>
		{texts.cta2}
		</Button>
		</div>
		
		{/* 下段：本のカバーが横一列に並ぶ「本棚ストリップ」 */}
		<motion.div
		initial={{ opacity: 0, y: 8 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.6, delay: 0.1 }}
		className="mt-4"
		>
		<div className="rounded-3xl bg-neutral-50 py-4 px-3 shadow-sm">
		<div className="flex gap-4 overflow-x-auto pb-2 justify-center">
		{covers.map((cover) => (
					<div
					key={cover.src}
					className="shrink-0 w-28 md:w-32"
					>
					<div className="relative aspect-square rounded-xl overflow-hidden shadow-md bg-neutral-100">
					<img
					src={cover.src}
					alt={cover.alt}
					className="h-full w-full object-cover"
					/>
					</div>
					</div>
		))}
		</div>
		{/* 小さなキャプション */}
		<p className="mt-2 text-xs text-neutral-500">
		オコジョの絵本シリーズ、野鳥・お城の塗り絵など、
		いろいろな本を少しずつ集めています。
		</p>
		</div>
		</motion.div>
		</div>
	);
}

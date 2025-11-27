// components/sections/HeroSection.tsx
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type HeroTexts = {
	title: string;
	subtitle: string;
	poem?: string; // optionalに変更（書籍サイトでは使わない可能性もあるため）
	cta1: string;
	cta2: string;
};

type HeroSectionProps = {
	texts: HeroTexts;
	scrollTo: (id: string) => void;
};

export default function HeroSection({ texts, scrollTo }: HeroSectionProps) {
	return (
		<section className="mx-auto max-w-5xl grid gap-10 md:grid-cols-2 items-center">
		
		{/* 左：タイトル＋説明＋ボタン */}
		<div className="order-2 md:order-1 space-y-4">
		
		<motion.h1
		initial={{ opacity: 0, y: 8 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.6 }}
		className="text-3xl md:text-4xl font-semibold text-neutral-900 leading-tight"
		>
		{texts.title}
		</motion.h1>
		
		<p className="text-base md:text-lg text-neutral-600 leading-relaxed">
		{texts.subtitle}
		</p>
		
		{texts.poem && (
				<p
				className="text-sm text-neutral-500 leading-relaxed"
				dangerouslySetInnerHTML={{ __html: texts.poem }}
				/>
		)}
		
		{/* ▼ ボタン */}
		<div className="pt-3 flex flex-wrap gap-3">
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
		</div>
		
		{/* 右：カバー画像（書籍サイトのメインビジュアル） */}
		<motion.div
		initial={{ opacity: 0, scale: 0.98 }}
		animate={{ opacity: 1, scale: 1 }}
		transition={{ duration: 0.6 }}
		className="order-1 md:order-2 flex justify-center"
		>
		<div className="relative w-52 md:w-64 aspect-[2/3] rounded-xl shadow-xl overflow-hidden bg-neutral-100">
		{/* ★ ここに書籍サイトのトップに使いたい“1冊のカバー”を指定します */}
		<img
		src="/covers/main-book.jpg" 
		alt="Main book cover"
		className="h-full w-full object-cover"
		/>
		</div>
		</motion.div>
		</section>
	);
}

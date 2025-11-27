// components/sections/HeroSection.tsx
import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, Camera } from "lucide-react";

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
	const hero = useMemo(
		() => ({
				// ★ カバー画像のスライド
				srcs: [
				"/covers/stoat-part2.jpg",
				"/covers/stoat-part3.jpg",
				"/covers/wildbirds-7.jpg",
				"/covers/castles.jpg",
				],
				alts: [
				"Stoat's Big Mountain Adventure Part 2",
				"Stoat's Big Mountain Adventure Part 3",
				"Japanese Wild Birds Series 7",
				"Castles of Japan",
				],
		}),
		[]
	);
	
	const [index, setIndex] = useState(0);
	
	useEffect(() => {
			const id = setInterval(() => {
					setIndex((i) => (i + 1) % hero.srcs.length);
			}, 6000);
			return () => clearInterval(id);
	}, [hero.srcs.length]);
	
	const prev = () =>
	setIndex((i) => (i - 1 + hero.srcs.length) % hero.srcs.length);
	const next = () => setIndex((i) => (i + 1) % hero.srcs.length);
	
	return (
		<div className="grid md:grid-cols-2 gap-8 items-center">
		{/* 左側：タイトル＋テキスト＋ボタン */}
		<div>
		<motion.h1
		initial={{ opacity: 0, y: 8 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.6 }}
		className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight drop-shadow-md"
		>
		{texts.title}
		</motion.h1>
		
		{/* サブタイトル */}
		<p className="mt-4 text-base sm:text-lg text-neutral-600">
		{texts.subtitle}
		</p>
		
		{/* 詩的な一文（改行付き） */}
		<p
		className="mt-3 text-sm text-neutral-500 leading-relaxed"
		dangerouslySetInnerHTML={{ __html: texts.poem }}
		/>
		
		{/* ボタン */}
		<div className="mt-6 flex gap-3">
		<Button className="rounded-2xl" onClick={() => scrollTo("book")}>
		{/* id="book" ではなく id="book" セクションに飛ばす */}
		<BookOpen className="h-4 w-4 mr-2" />
		{texts.cta1}
		</Button>
		<Button
		variant="outline"
		className="rounded-2xl"
		onClick={() => scrollTo("book")}
		>
		{/* いまはポートフォリオをコメントアウトしているので、とりあえずこちらも book へ */}
		<Camera className="h-4 w-4 mr-2" />
		{texts.cta2}
		</Button>
		</div>
		</div>
		
		{/* 右側：ヒーロー画像スライダー（書籍カバー用に調整済み） */}
		<motion.div
		initial={{ opacity: 0, scale: 0.98 }}
		whileInView={{ opacity: 1, scale: 1 }}
		viewport={{ once: true }}
		transition={{ duration: 0.6 }}
		className="relative md:justify-self-end w-full"
		>
		<div className="aspect-square w-full max-w-sm md:max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl bg-white relative">
		<AnimatePresence mode="wait">
		<motion.img
		key={hero.srcs[index]}
		src={hero.srcs[index]}
		alt={hero.alts[index]}
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0 }}
		transition={{ duration: 0.8 }}
		className="absolute inset-0 h-full w-full object-contain"
		/>
		</AnimatePresence>
		
		{/* ← グラデーションは書籍カバーには不要なので削除 */}
		
		{/* 左右の切り替えボタン */}
		<div className="absolute inset-0 flex items-center justify-between px-3">
		<button
		type="button"
		onClick={prev}
		className="bg-black/30 text-white rounded-full px-2 py-1 text-lg"
		>
		←
		</button>
		<button
		type="button"
		onClick={next}
		className="bg-black/30 text-white rounded-full px-2 py-1 text-lg"
		>
		→
		</button>
		</div>
		</div>
		</motion.div>
		</div>
	);
}

"use client";

import React, { useEffect, useState } from "react";
import GoodsHero from "@/components/goods/GoodsHero";
import GoodsCategoryGrid from "@/components/goods/GoodsCategoryGrid";
import GoodsFinalCTA from "@/components/goods/GoodsFinalCTA";
import Link from "next/link";
import Image from "next/image";

const LANG_KEY = "mk_lang";
type Lang = "ja" | "en";

export default function GoodsPage() {
	const [lang, setLang] = useState<Lang>("ja");
	
	// トップページと同じ仕様： ?lang= 優先 → localStorage 復元
	useEffect(() => {
			if (typeof window === "undefined") return;
			
			const params = new URLSearchParams(window.location.search);
			const urlLang = params.get("lang");
			if (urlLang === "ja" || urlLang === "en") {
				setLang(urlLang);
				try {
					localStorage.setItem(LANG_KEY, urlLang);
				} catch {}
				return;
			}
			
			try {
				const saved = localStorage.getItem(LANG_KEY) as Lang | null;
				if (saved === "ja" || saved === "en") setLang(saved);
			} catch {}
	}, []);
	
	return (
		<main className="min-h-screen bg-white text-neutral-900">
		<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
		
		{/* 戻るリンク（上） */}
		<div className="mb-6">
		<Link
		href="/"
		className="inline-flex items-center gap-3 text-sm text-neutral-600 hover:text-neutral-900"
		>
		<div className="relative h-10 w-10">
		<Image
		src="/okojo-logo.png"
		alt="Okojo logo"
		fill
		className="object-contain"
		/>
		</div>
		
		<span className="leading-tight">
		← 書籍一覧へ戻る
		<span className="block text-xs text-neutral-500">
		← Back to book list
		</span>
		</span>
		</Link>
		</div>
		
		<GoodsHero lang={lang} />
		<GoodsCategoryGrid lang={lang} />
		<GoodsFinalCTA lang={lang} />
		</div>
		</main>
	);
}

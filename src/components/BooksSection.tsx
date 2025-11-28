"use client";

import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/data/books";
import { useEffect, useState } from "react";

type BooksSectionProps = {
	books: Book[];
	lang: "ja" | "en";
};

function truncate(text: string, max: number) {
	if (!text) return "";
	if (text.length <= max) return text;
	return text.slice(0, max) + "…";
}

export default function BooksSection({ books, lang }: BooksSectionProps) {
	if (!books || books.length === 0) return null;
	
	// ▼ マウント時アニメーション用フラグ
	const [mounted, setMounted] = useState(false);
	
	useEffect(() => {
			setMounted(true);
	}, []);
	
	return (
		<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
		{books.map((book, index) => {
					// ▼ メインタイトル（言語に応じて切り替え）
					const mainTitle =
					lang === "ja"
					? book.titleJa ?? book.title
					: book.title || book.titleJa || "";
					
					// ▼ 説明文（日本語／英語）
					const fullDesc =
					lang === "ja"
					? book.descriptionJa ?? book.description
					: book.description ?? book.descriptionJa;
					
					// ★ ここで文字数を調整できます
					const maxLength = lang === "ja" ? 120 : 190;
					const shortDesc = fullDesc ? truncate(fullDesc, maxLength) : "";
					
					// ▼ ボタン文言
					const detailLabel = lang === "ja" ? "詳細を見る" : "View details";
					
					return (
						<article
						key={book.id}
						className={
							"flex flex-col md:flex-row h-full gap-6 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm transition-all duration-500 ease-out hover:shadow-md " +
							(mounted
								? "opacity-100 translate-y-0"

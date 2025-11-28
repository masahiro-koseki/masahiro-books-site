"use client";

import Image from "next/image";
import Link from "next/link";
import type { Book } from "@/data/books";

type BooksSectionProps = {
	books: Book[];
	lang: "ja" | "en";
};

function truncate(text: string, max: number) {
	if (text.length <= max) return text;
	return text.slice(0, max) + "…";
}

export default function BooksSection({ books, lang }: BooksSectionProps) {
	if (!books || books.length === 0) return null;
	
	return (
		<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
		{books.map((book) => {
					// ▼ タイトル
					const mainTitle =
					lang === "ja"
					? book.titleJa ?? book.title
					: book.title || book.titleJa || "";
					
					const subTitle =
					lang === "ja"
					? book.title && book.title !== mainTitle
					? book.title
					: undefined
					: book.titleJa && book.titleJa !== mainTitle
					? book.titleJa
					: undefined;
					
					// ▼ 説明文（日本語と英語で長さを変える）
					const fullDesc =
					lang === "ja"
					? book.descriptionJa ?? book.description
					: book.description ?? book.descriptionJa;
					
					const maxLength = lang === "ja" ? 120 : 190; // ★ここが今回の重要ポイント
					const shortDesc = fullDesc ? truncate(fullDesc, maxLength) : "";
					
					// ▼ ボタン文言
					const detailLabel = lang === "ja" ? "詳細を見る" : "View details";
					
					return (
						<article
						key={book.id}
						className="flex flex-col md:flex-row gap-6 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm"
						>
						{/* 左：テキスト */}
						<div className="flex-1">
						<h3 className="text-base md:text-lg font-semibold text-neutral-900">
						{mainTitle}
						</h3>
						
						{subTitle && (
								<p className="mt-1 text-xs text-neutral-500">{subTitle}</p>
						)}
						
						{shortDesc && (
								<p className="mt-3 text-sm text-neutral-600">{shortDesc}</p>
						)}
						
						{/* ボタン類 */}
						<div className="mt-4 flex flex-wrap gap-2 text-xs">
						{book.amazonJp && (
								<a
								href={book.amazonJp}
								target="_blank"
								rel="noopener noreferrer"
								className="px-3 py-1 rounded-full border border-neutral-300 hover:bg-neutral-100 transition"
								>
								Amazon.co.jp
								</a>
						)}
						
						{book.amazonEn && (
								<a
								href={book.amazonEn}
								target="_blank"
								rel="noopener noreferrer"
								className="px-3 py-1 rounded-full border border-neutral-300 hover:bg-neutral-100 transition"
								>
								Amazon.com
								</a>
						)}
						
						<Link
						href={`/books/${book.id}`}
						className="px-3 py-1 rounded-full border border-neutral-300 hover:bg-neutral-100 transition"
						>
						{detailLabel}
						</Link>
						</div>
						</div>
						
						{/* 右：カバー画像 */}
						{book.coverSrc && (
								<div className="w-full md:w-48 lg:w-56 shrink-0">
								<div className="relative aspect-square rounded-xl overflow-hidden bg-neutral-100">
								<Image
								src={book.coverSrc}
								alt={mainTitle}
								fill
								className="object-cover"
								/>
								</div>
								</div>
						)}
						</article>
					);
		})}
		</div>
	);
}

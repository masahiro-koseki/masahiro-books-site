"use client";

import Image from "next/image";
import Link from "next/link";

type Book = {
	id: string;
	title_ja: string;
	title_en: string;
	desc_ja: string;
	desc_en: string;
	cover: string;
	amazon_jp?: string;
	amazon_en?: string;
};

type BooksSectionProps = {
	lang: "ja" | "en";
	books: Book[];
};

export default function BooksSection({ lang, books }: BooksSectionProps) {
	return (
		<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
		{books.map((book) => {
					const title = lang === "ja" ? book.title_ja : book.title_en;
					const desc = lang === "ja" ? book.desc_ja : book.desc_en;
					
					return (
						<div
						key={book.id}
						className="
						group rounded-2xl overflow-hidden bg-white
						shadow-md hover:shadow-xl transition-shadow duration-300
						border border-neutral-200
						"
						>
						{/* --- カバー画像 --- */}
						<div className="relative w-full aspect-[3/4] overflow-hidden bg-neutral-100">
						<Image
						src={book.cover}
						alt={title}
						fill
						className="
						object-cover transition-transform duration-500
						group-hover:scale-[1.03]
						"
						/>
						</div>
						
						{/* --- テキスト部分 --- */}
						<div className="p-5 space-y-3">
						<h3 className="font-semibold text-lg text-neutral-900 tracking-tight leading-snug">
						{title}
						</h3>
						
						<p className="text-neutral-600 text-sm leading-relaxed line-clamp-3">
						{desc}
						</p>
						
						{/* --- Amazonリンク --- */}
						<div className="pt-2 flex flex-col gap-2 text-sm">
						{book.amazon_jp && (
								<a
								href={book.amazon_jp}
								target="_blank"
								className="
								inline-flex items-center justify-center
								rounded-full border border-neutral-300 px-3 py-1.5
								text-neutral-800 hover:bg-neutral-50 transition
								"
								>
								{lang === "ja" ? "Amazonで見る（日本）" : "Amazon Japan"}
								</a>
						)}
						
						{book.amazon_en && (
								<a
								href={book.amazon_en}
								target="_blank"
								className="
								inline-flex items-center justify-center
								rounded-full border border-neutral-300 px-3 py-1.5
								text-neutral-800 hover:bg-neutral-50 transition
								"
								>
								{lang === "ja" ? "Amazonで見る（海外）" : "Amazon US / Global"}
								</a>
						)}
						</div>
						
						{/* --- 詳細ページボタン --- */}
						<div className="pt-2">
						<Link
						href={`/books/${book.id}`}
						className="
						inline-block rounded-full border border-neutral-300
						px-4 py-2 text-sm text-neutral-700
						hover:bg-neutral-100 transition
						"
						>
						{lang === "ja" ? "詳しく見る" : "View Details"}
						</Link>
						</div>
						</div>
						</div>
					);
		})}
		</div>
	);
}

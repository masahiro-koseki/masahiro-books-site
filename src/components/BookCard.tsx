// src/components/BookCard.tsx
import Link from "next/link";
import Image from "next/image";
import type { Book } from "@/data/books";

export default function BookCard({ book }: { book: Book }) {
	return (
		<Link
		href={`/books/${book.id}`}
		className="group rounded-lg shadow hover:shadow-lg transition p-3 border border-neutral-200 block"
		>
		{/* カバー画像 */}
		{book.coverSrc && (
				<div className="w-full aspect-square relative overflow-hidden rounded-md">
				<Image
				src={book.coverSrc}
				alt={book.title}
				fill
				className="object-contain bg-white"
				/>
				</div>
		)}
		
		{/* タイトル */}
		<h3 className="mt-3 font-semibold text-lg">{book.title}</h3>
		
		{/* 日本語タイトル */}
		{book.titleJa && (
				<p className="text-sm text-neutral-600">{book.titleJa}</p>
		)}
		
		{/* Amazon ボタン（詳細ページ側に任せるため、ここでは何も表示しなくてOK） */}
		</Link>
	);
}

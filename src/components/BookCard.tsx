import Link from "next/link";
import Image from "next/image";
import type { Book } from "@/data/books";

export default function BookCard({ book }: { book: Book }) {
	return (
		<Link
		href={`/books/${book.id}`}
		className="group block rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm hover:shadow-md transition"
		>
		{/* カバー画像（縦長に変更） */}
		{book.coverSrc && (
				<div className="w-full relative overflow-hidden rounded-xl bg-neutral-100 aspect-[2/3]">
				<Image
				src={book.coverSrc}
				alt={book.title}
				fill
				className="object-cover"
				/>
				</div>
		)}
		
		{/* タイトル */}
		<h3 className="mt-3 text-sm font-semibold text-neutral-900 group-hover:text-neutral-950">
		{book.title}
		</h3>
		
		{/* 日本語タイトル */}
		{book.titleJa && (
				<p className="mt-1 text-xs text-neutral-600">{book.titleJa}</p>
		)}
		</Link>
	);
}

// src/components/BooksSection.tsx

import BookCard from "./BookCard";
import type { Book, BookCategory } from "@/data/books";

// BooksSection.tsx

export default function BooksSection({ books }: { books: Book[] }) {
	return (
		<div className="mt-6">
		<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
		{books.map((b) => (
					<BookCard key={b.id} book={b} />
		))}
		</div>
		</div>
	);
}

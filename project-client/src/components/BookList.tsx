import { Book } from "../types/book";
import { BookCard } from "./BookCard";

interface Props {
  books: Book[];
}

export const BookList: React.FC<Props> = ({ books }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {books.map((book) => <BookCard key={book.id} book={book} />)}
  </div>
);

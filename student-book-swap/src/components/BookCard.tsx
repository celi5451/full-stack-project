import { Book } from "../types/book";

export const BookCard: React.FC<{ book: Book }> = ({ book }) => (
  <div className="border p-4 rounded shadow-md">
    <h3 className="text-lg font-semibold">{book.title}</h3>
    <p>Author: {book.author}</p>
    <p>Subject: {book.subject}</p>
    <p>Education: {book.education}</p>
    <p>Price: ${book.price}</p>
    <p>Condition: {book.condition}</p>
  </div>
);

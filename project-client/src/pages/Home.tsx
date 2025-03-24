import { useState } from "react";
import { Book } from "../types/book";
import { FilterPanel } from "../components/FilterPanel";
import { BookList } from "../components/BookList";

const dummyBooks: Book[] = [
  { id: "1", title: "Math 101", author: "A. Author", subject: "Math", education: "University", price: 20, condition: "Used" },
  { id: "2", title: "Physics Basics", author: "B. Scientist", subject: "Physics", education: "High School", price: 15, condition: "Used" },
  { id: "3", title: "Modern Literature", author: "C. Writer", subject: "Literature", education: "University", price: 25, condition: "New" },
];

export const Home = () => {
  const [subject, setSubject] = useState("");
  const [education, setEducation] = useState("");

  const filteredBooks = dummyBooks.filter(book =>
    (subject ? book.subject === subject : true) &&
    (education ? book.education === education : true)
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Student Book Swap</h1>
      <FilterPanel subject={subject} education={education} setSubject={setSubject} setEducation={setEducation} />
      <BookList books={filteredBooks} />
    </div>
  );
};

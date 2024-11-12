import { useEffect, useState } from "react";

const categories = [
  "Поиск по жанру",
  "Бизнес",
  "Фэнтези",
  "Хоррор",
  "Приключения",
];

const TopSellers = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Бестселлеры</h2>
      {/* categoty filter*/}
      <div className="mb-8 flex items-center">
        <select
          name="category"
          id="category"
          className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TopSellers;

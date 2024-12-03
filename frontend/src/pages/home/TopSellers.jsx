import { useEffect, useState } from "react";
import BookCard from "../books/BookCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

import { useFetchAllBooksQuery } from "../../redux/features/books/bookApi";

const categories = [
  "Поиск по жанру",
  "Бизнес",
  "Фэнтези",
  "Хоррор",
  "Приключения",
];

const TopSellers = () => {
  const [selectedCategory, setSelectedCategory] = useState("Поиск по жанру");

  const {data: books = []} = useFetchAllBooksQuery()
  console.log(books)

  const filteredBooks =
    selectedCategory === "Поиск по жанру"
      ? books
      : books.filter(
          (book) => book.category === selectedCategory.toLowerCase()
        );

  console.log(filteredBooks);

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Бестселлеры</h2>
      {/* categoty filter*/}
      <div className="mb-8 flex items-center">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
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

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {filteredBooks.length > 0 && filteredBooks.map((book, index) => (
          <>
            <SwiperSlide key={index} >
              <BookCard book={book} />
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default TopSellers;

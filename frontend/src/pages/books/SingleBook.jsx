import { useDispatch } from "react-redux";
import booksApi, { useFetchBookByIdQuery } from "../../redux/features/books/bookApi";
import { getImgUrl } from "../../utils/getImgUrl";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useParams } from "react-router-dom";
import { addToCart } from "../../redux/features/cart/cartSlice";

const SingleBook = () => {
  const dispatch = useDispatch();

  const { id } = useParams()
  const {data: book, isLoading, isError} = useFetchBookByIdQuery(id)

  if(isLoading) {
    return <div>Загрузка...</div>
  }

  if(isError) {
    return <div>Ошибка во время загрузки</div>
  }


  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

    return (
    <div className="max-w-lg shadow-md p-5">
      <h1 className="text-2xl font-bold mb-6">{booksApi.title}</h1>
      <div className="">
        <div>
          <img
            src={`${getImgUrl(book.coverImage)}`}
            alt={book.title}
            className="mb-8"
          />
        </div>

        <div className="mb-5">
          <p className="text-gray-700 mb-2">
            <strong>Автор: </strong>
            {book.author || "админ"}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Опубликована: </strong>
            {new Date(book?.createdAt).toLocaleDateString()}
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Категория: </strong> {book?.category}
          </p>
          <p className="text-gray-700">
            <strong>Описание: </strong> {book.description}
          </p>
        </div>

        <button
          onClick={() => handleAddToCart(book)}
          className="btn-primary px-6 space-x-1 flex items-center gap-1"
        >
          <MdOutlineShoppingCart className="" />
          <span>Добавить в корзину</span>
        </button>
      </div>
    </div>
  );
};

export default SingleBook;

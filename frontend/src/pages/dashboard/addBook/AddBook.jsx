import InputField from './InputField'
import SelectField from './SelectField'
import { useForm } from 'react-hook-form';
import { useAddBookMutation } from '../../../redux/features/books/bookApi';
import Swal from 'sweetalert2';
import { useState } from 'react';

const AddBook = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [imageFile, setImageFile] = useState(null)
    const [addBook, {isLoading, isError}] = useAddBookMutation()
    const [imageFileName, setImageFileName] = useState("")
    const onSubmit = async (data) => {

        const newBookData = {
            ...data,
            coverImage: imageFileName
        }
        try {
            await addBook(newBookData).unwrap();
            Swal.fire({
                title: "Добавление Книги",
                text: "Книга успешно добавлена!",
                icon: "success",
                showCancelButton: false,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Хорошо"
              });
              reset()
              setImageFileName("")
              setImageFile(null)
        } catch (error) {
            console.error("Error", error)
            alert("Не получилось добавить книгу. Попробуйте еще раз")
        }

    }

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if(file) {
            setImageFile(file)
            setImageFileName(file.name)
        }
    }
  return (
    <div className="max-w-lg   mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Добавить Новую Книгу</h2>

      {/* Form starts here */}
      <form onSubmit={handleSubmit(onSubmit)} className=''>
        {/* Reusable Input Field for Title */}
        <InputField
          label="Название"
          name="title"
          placeholder="Введите название книги"
          register={register}
        />

        {/* Reusable Textarea for Description */}
        <InputField
          label="Описание"
          name="description"
          placeholder="Введите описание книги"
          type="textarea"
          register={register}

        />

        {/* Reusable Select Field for Category */}
        <SelectField
          label="Категория"
          name="category"
          options={[
            { value: '', label: 'Выберите категорию' },
            { value: 'business', label: 'Бизнес' },
            { value: 'technology', label: 'Маркетинг' },
            { value: 'fiction', label: 'Фэнтези' },
            { value: 'horror', label: 'Ужасы' },
            { value: 'adventure', label: 'Приключения' },

          ]}
          register={register}
        />

        {/* Trending Checkbox */}
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register('trending')}
              className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm font-semibold text-gray-700">Популярное?</span>
          </label>
        </div>

        {/* Old Price */}
        <InputField
          label="Старая Цена"
          name="oldPrice"
          type="number"
          placeholder="Старая Цена"
          register={register}
         
        />

        {/* New Price */}
        <InputField
          label="Новая Цена"
          name="newPrice"
          type="number"
          placeholder="Новая Цена"
          register={register}
          
        />

        {/* Cover Image Upload */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Изображение</label>
          <input type="file" accept="image/*" onChange={handleFileChange} className="mb-2 w-full" />
          {imageFileName && <p className="text-sm text-gray-500">Выбрано: {imageFileName}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full py-2 bg-green-500 text-white font-bold rounded-md">
         {
            isLoading ? <span className="">Добавление.. </span> : <span>Добавить книгу</span>
          }
        </button>
      </form>
    </div>
  )
}

export default AddBook

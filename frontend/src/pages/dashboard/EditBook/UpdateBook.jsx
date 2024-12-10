import React, { useEffect } from 'react'
import InputField from '../addBook/InputField'
import SelectField from '../addBook/SelectField'

import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useFetchBookByIdQuery, useUpdateBookMutation } from '../../../redux/features/books/bookApi';
import Loading from '../../../components/Loading';
import Swal from 'sweetalert2';
import getBaseUrl from '../../../utils/baseUrl';
import axios from 'axios';

const UpdateBook = () => {
    const {id} = useParams()
    const {data: bookData, isLoading, isError, refetch} = useFetchBookByIdQuery(id)
    const [updateBook] = useUpdateBookMutation()
    const { register, handleSubmit, setValue, reset } = useForm();
    useEffect(() => {
        if(bookData) {
            setValue("title", bookData.title)
            setValue('description', bookData.description);
            setValue('category', bookData?.category);
            setValue('trending', bookData.trending);
            setValue('oldPrice', bookData.oldPrice);
            setValue('newPrice', bookData.newPrice);
            setValue('coverImage', bookData.coverImage)
        }
    }, [bookData, setValue])

    const onSubmit = async (data) => {
        const updateBookData = {
            title: data.title,
            description: data.description,
            category: data.category,
            trending: data.trending,
            oldPrice: Number(data.oldPrice),
            newPrice: Number(data.newPrice),
            coverImage: data.coverImage || bookData.coverImage,
        }
        try {
            // await updateBook({id, ...updateBookData}).unwrap()
            await axios.put(`${getBaseUrl()}/api/books/edit/${id}`, updateBookData, {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
              })
            Swal.fire({
                title: "Обновление Книги",
                text: "Книга успешно обновлена!",
                icon: "success",
                showCancelButton: false,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Хорошо"
              });
        } catch (error) {
            console.error("Не удалось обновить книгу", error)
            alert("Не удалось обновить книгу")
        }
    }

    if(isLoading) {
        return <Loading />
    }
    if(isError) {
        return <div>Ошибка загрузки данных</div>
    }
  return (
<div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Обновление Книги</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Название"
          name="title"
          placeholder="Введите название книги"
          register={register}
        />

        <InputField
          label="Описание"
          name="description"
          placeholder="Введите описание книги"
          type="textarea"
          register={register}
        />

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

        <InputField
          label="Старая Цена"
          name="oldPrice"
          type="number"
          placeholder="Старая Цена"
          register={register}
        />

        <InputField
          label="Новая Цена"
          name="newPrice"
          type="number"
          placeholder="Новая Цена"
          register={register}
        />

        <InputField
          label="Изображение"
          name="coverImage"
          type="text"
          placeholder="Изображение"
          register={register}
        />

        <button type="submit" className="w-full py-2 bg-blue-500 text-white font-bold rounded-md">
          Обновить Книгу
        </button>
      </form>
    </div>
  )
}

export default UpdateBook

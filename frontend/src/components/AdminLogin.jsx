import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import getBaseUrl from '../utils/baseURL'

import axios from "axios"

const AdminLogin = () => {

    const [message, setMessage] = useState("");
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const onSubmit = async (data) => {
        console.log(data)
        try{
          const response = await axios.post(`${getBaseUrl()}/api/auth/admin`, data, {
            headers: {
              "Content-Type": "application/json",
            }
          })
          const auth = response.data
          console.log(auth)
          if(auth.token) {
            localStorage.setItem("token", auth.token)
            setTimeout(() => {
              localStorage.removeItem("token")
              alert("Истек срок действия токена. Необходимо авторизоваться повторно")
              navigate("/")
            }, 3600 * 1000)
          }
          alert("Вы вошли как админ")
          navigate("/dashboard")
        }catch(error){
          setMessage("Введите корректный email или пароль")
          console.log(error)
        }
      };

  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Войти как админ</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              {...register("username", { required: true })}
              type="text"
              name="username"
              id="username"
              placeholder="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Пароль
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              name="password"
              id="password"
              placeholder="Пароль"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>
          {message && (
            <p className="text-red-500 text-xs italic mb-3">{message}</p>
          )}
          <div>
            <button className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none">
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin

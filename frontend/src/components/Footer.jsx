import footerLogo  from "../assets/footer-logo.png"


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      {/* Top Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Side - Logo and Nav */}
        <div className="md:w-1/2 w-full">
          <img src={footerLogo} alt="Logo" className="mb-5 w-36" />
          <ul className="flex flex-col md:flex-row gap-4">
            <li><a href="#home" className="hover:text-primary">Главная</a></li>
            <li><a href="#services" className="hover:text-primary">Услуги</a></li>
            <li><a href="#about" className="hover:text-primary">О Нас</a></li>
            <li><a href="#contact" className="hover:text-primary">Контакты</a></li>
          </ul>
        </div>

        {/* Right Side - Newsletter */}
        <div className="md:w-1/2 w-full">
          <p className="mb-4">
            Подпишитесь на нашу рассылку чтобы быть в курсе всех новостей!
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Ваш email"
              className="w-full px-4 py-2 rounded-l-md text-black"
            />
            <button className="bg-primary px-6 py-2 rounded-r-md hover:bg-primary-dark">
              Подписаться
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
        {/* Left Side - Privacy Links */}
        <ul className="flex gap-6 mb-4 md:mb-0">
          <li><a href="#privacy" className="hover:text-primary">Политика приватности</a></li>
          <li><a href="#terms" className="hover:text-primary">Условия сервиса</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
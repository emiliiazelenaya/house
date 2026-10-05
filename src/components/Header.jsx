import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Логотип */}
          <div className="flex items-center gap-2">
              <img src="../img/logo.png" alt="" />
          </div>

          {/* Desktop меню */}
          <nav className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
            <a href="#" className="hover:text-orange-500 transition">Услуги</a>
            <a href="#" className="text-orange-500 mb-13">
              <hr class="my-6 h-1 bg-orange-500" />Продукция</a>
            <a href="#" className="hover:text-orange-500 transition">О компании</a>
            <a href="#" className="hover:text-orange-500 transition">Портфолио</a>
            <a href="#" className="hover:text-orange-500 transition">Вопрос-ответ</a>
            <a href="#" className="hover:text-orange-500 transition">Контакты</a>
          </nav>

          {/* Desktop кнопки */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-1 rounded-md font-medium transition flex h-10 ">
              <img className="mr-3 h-5 mt-1 " src="../img/btn1.png" alt="" />
              <p className="mt-1 ">Заявка на замер</p>
            </button>
            <button className="bg-indigo-900 hover:bg-indigo-800 text-white px-5 py-2 rounded-md font-medium transition flex h-10">
              <img className="mr-3 h-5" src="../img/btn2.png" alt="" />
              Заказать расчет
            </button>
          </div>

          {/* Burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-0.5 bg-gray-800"></span>
            <span className="w-6 h-0.5 bg-gray-800"></span>
            <span className="w-6 h-0.5 bg-gray-800"></span>
          </button>

        </div>
      </div>

      {/* Mobile меню */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="flex flex-col gap-4 px-4 py-6 text-gray-700 font-medium">
            <a href="#" className="text-orange-500">
              
              Продукция</a>
            <a href="#">Услуги</a>
            <a href="#">О компании</a>
            <a href="#">Портфолио</a>
            <a href="#">Вопрос-ответ</a>
            <a href="#">Контакты</a>

            <div className="flex flex-col gap-3 pt-4">
              <button className="bg-orange-500 text-white py-2 rounded-md">
                Заявка на замер
              </button>
              <button className="bg-indigo-900 text-white py-2 rounded-md">
                Заказать расчет
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

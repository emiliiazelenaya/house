export default function Hero() {
  return (
    <section className="relative w-full h-[720px] bg-[url('/img/Hero.png')] bg-size-[auto_700px] bg-center">
      
      {/* overlay */}
      <div className="absolute inset-0 bg-[#1b1f2b]/80  mx-auto" ></div>

      <div className="relative max-w-[1400px] mx-auto h-100 px-10  ">
        
        {/* LEFT CONTENT */}
        <div className="pt-40 max-w-[700px]">
          <h1 className="text-white text-[54px] leading-[1.15] font-light">
            <span className="text-orange-500 font-bold block mb-3">
              Окна Хаус -
            </span>
            Профессиональный подход к остеклению
          </h1>

          {/* features */}
          <div className="mt-24 grid grid-cols-3 gap-16 ">
            
            <div>
              <img src="/img/hero1.png" className="h-16 mb-6" />
              <p className="text-white text-sm leading-relaxed">
                Современные окна и балконные конструкции по доступным ценам
              </p>
            </div>

            <div>
              <img src="/img/hero2.png" className="h-16 mb-6" />
              <p className="text-white text-sm leading-relaxed">
                Квалифицированный подход к решению задач любой сложности
              </p>
            </div>

            <div>
              <img src="/img/hero3.png" className="h-16 mb-6" />
              <p className="text-white text-sm leading-relaxed">
                Гарантия высочайшего качества нашей продукции
              </p>
            </div>

          </div>
        </div>

        {/* FORM (FLOATING CARD) */}
        <div className="absolute mx-auto right-10 top-32 w-[420px] bg-white rounded-xl shadow-2xl p-10">

          <h3 className="text-xl font-bold mb-6 text-center">
            Вызвать замерщика на дом
          </h3>

          <div className="space-y-4">
            <input className="w-full bg-gray-300 px-4 py-3 rounded-md" placeholder="Имя" />
            <input className="w-full bg-gray-300 px-4 py-3 rounded-md" placeholder="Номер телефона" />
            <input className="w-full bg-gray-300 px-4 py-3 rounded-md" placeholder="E-mail" />
<label className=" flex mb-8 items-start gap-3 text-xs text-gray-500 leading-snug mx-auto">
    <img className="" src="../img/eee.png" alt="" />
    <span>
      Согласен на обработку персональных данных
      <br />
      в соответствии с{" "}
      <a href="#" className="text-blue-500 ">
        политикой конфиденциальности
      </a>
    </span>
  </label>
            <button className="w-60 mb-10 flex justify-center mx-auto text-center bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-semibold">
              Отправить заявку
            </button>
          </div>

        </div>
        <img className="w-[660px] ml-200 -translate-y-23" src="../img/lineika.png" alt="" />
      </div>
    </section>
  )
}

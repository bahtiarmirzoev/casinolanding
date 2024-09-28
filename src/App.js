import React from "react";
import { FaWhatsapp, FaGem, FaStar, FaGift } from "react-icons/fa";
import bgImage from "./assets/casino-bg.jpg"; // Убедитесь, что изображение доступно

function App() {
  return (
    <div
      className="relative min-h-screen overflow-hidden bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }} // Фоновое изображение
    >
      {/* Полупрозрачный Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Основной контент */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white p-4">
        {/* Заголовок с адаптивностью */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 animate-fade-in">
          bet365 Kazino’ya Xoş Gəlmisiniz
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 animate-slide-in">
          Həyəcan və uğur axtarırsınız? Ən yaxşı onlayn kazino ilə oynayın!
        </p>

        {/* Карточки с преимуществами */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-10 max-w-screen-lg">
          {/* Карточка 1 */}
          <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all">
            <FaGem className="text-3xl sm:text-4xl text-purple-400 mb-4 mx-auto" />
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              Brilyant Qazanc
            </h2>
            <p className="text-sm sm:text-base">
              Şansınızı sınayın və inanılmaz hədiyyələr qazanın!
            </p>
          </div>

          {/* Карточка 2 */}
          <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all">
            <FaStar className="text-3xl sm:text-4xl text-yellow-400 mb-4 mx-auto" />
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              Yüksək Qazanma Şansı
            </h2>
            <p className="text-sm sm:text-base">
              Ən yaxşı uduş şansları ilə ədalətli oyunu yaşayın.
            </p>
          </div>

          {/* Карточка 3 */}
          <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all">
            <FaGift className="text-3xl sm:text-4xl text-red-400 mb-4 mx-auto" />
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              Bonuslar və Aksiyalar
            </h2>
            <p className="text-sm sm:text-base">
              Eksklüziv bonuslar və xüsusi təkliflərdən yararlanın.
            </p>
          </div>
        </div>

        {/* Кнопка перехода на WhatsApp */}
        <a
          href="https://wa.me/+994553344349"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 sm:px-10 md:px-12 rounded-full flex items-center justify-center gap-2 transition-transform transform hover:scale-110 shadow-lg animate-bounce"
        >
          <FaWhatsapp className="text-xl sm:text-2xl" />
          WhatsApp ilə Əlaqə
        </a>
      </div>
    </div>
  );
}

export default App;

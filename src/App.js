import React from "react";
import { FaWhatsapp, FaGem, FaStar, FaGift } from "react-icons/fa";
import bgImage from "./assets/casino-bg.jpg";

function App() {
  return (
    <div
      className="relative h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }} // Устанавливаем фоновое изображение
    >
      {/* Полупрозрачный Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Основной контент */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
        <h1 className="text-5xl font-extrabold mb-6 animate-fade-in">
          BET365 ya Xoş Gəlmisiniz
        </h1>
        <p className="text-xl mb-8 animate-slide-in">
          Həyəcan və uğur axtarırsınız? Ən yaxşı onlayn kazino ilə oynayın!
        </p>

        {/* Карточки с преимуществами */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all">
            <FaGem className="text-4xl text-purple-400 mb-4 mx-auto" />
            <h2 className="text-2xl font-bold mb-2">Brilyant Qazanc</h2>
            <p>Şansınızı sınayın və inanılmaz hədiyyələr qazanın!</p>
          </div>
          <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all">
            <FaStar className="text-4xl text-yellow-400 mb-4 mx-auto" />
            <h2 className="text-2xl font-bold mb-2">Yüksək Qazanma Şansı</h2>
            <p>Ən yaxşı uduş şansları ilə ədalətli oyunu yaşayın.</p>
          </div>
          <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all">
            <FaGift className="text-4xl text-red-400 mb-4 mx-auto" />
            <h2 className="text-2xl font-bold mb-2">Bonuslar və Aksiyalar</h2>
            <p>Eksklüziv bonuslar və xüsusi təkliflərdən yararlanın.</p>
          </div>
        </div>

        {/* Кнопка перехода на WhatsApp */}
        <a
          href="https://wa.me/+994553344349"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-12 rounded-full flex items-center justify-center gap-2 transition-transform transform hover:scale-110 shadow-lg animate-bounce"
        >
          <FaWhatsapp className="text-2xl" />
          Canli dəstək
        </a>
      </div>
    </div>
  );
}

export default App;

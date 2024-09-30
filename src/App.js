import React from "react";
import {
  FaWhatsapp,
  FaGem,
  FaStar,
  FaGift,
  FaInstagram,
  FaTelegramPlane,
  FaTiktok,
} from "react-icons/fa";
import bgImage from "./assets/casino-bg.jpg"; // Ensure the image is available

function App() {
  return (
    <div
      className="relative min-h-screen overflow-hidden bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }} // Background image
    >
      {/* Semi-transparent overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 md:opacity-60"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white p-4">
        {/* Title with responsiveness and shadow */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 animate-fade-in shadow-lg">
          bet365 Kazino’ya Xoş Gəlmisiniz
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 animate-slide-in shadow-lg">
          Həyəcan və uğur axtarırsınız? Ən yaxşı onlayn kazino ilə oynayın!
        </p>

        {/* Advantage cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-10 max-w-screen-lg">
          {/* Card 1 */}
          <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all">
            <FaGem className="text-3xl sm:text-4xl text-purple-400 mb-4 mx-auto" />
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Brilyant Qazanc</h2>
            <p className="text-sm sm:text-base">
              Şansınızı sınayın və inanılmaz hədiyyələr qazanın!
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all">
            <FaStar className="text-3xl sm:text-4xl text-yellow-400 mb-4 mx-auto" />
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Yüksək Qazanma Şansı</h2>
            <p className="text-sm sm:text-base">
              Ən yaxşı uduş şansları ilə ədalətli oyunu yaşayın.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-black bg-opacity-70 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all">
            <FaGift className="text-3xl sm:text-4xl text-red-400 mb-4 mx-auto" />
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Bonuslar və Aksiyalar</h2>
            <p className="text-sm sm:text-base">
              Eksklüziv bonuslar və xüsusi təkliflərdən yararlanın.
            </p>
          </div>
        </div>

        {/* WhatsApp button */}
<a
  href="https://wa.me/+994553344349"
  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 sm:px-10 md:px-12 rounded-full flex items-center justify-center gap-2 transition-transform transform hover:scale-110 shadow-lg mb-4 w-full max-w-xs"
>
  <FaWhatsapp className="text-xl sm:text-2xl" />
  WhatsApp ilə Əlaqə
</a>

{/* Telegram button */}
<a
  href="https://t.me/YOUR_TELEGRAM_LINK"
  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 sm:px-10 md:px-12 rounded-full flex items-center justify-center gap-2 transition-transform transform hover:scale-110 shadow-lg mb-4 w-full max-w-xs"
>
  <FaTelegramPlane className="text-xl sm:text-2xl" />
  Telegram ilə Əlaqə
</a>

{/* Instagram button */}
<a
  href="https://www.instagram.com/YOUR_INSTAGRAM_LINK"
  className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-8 sm:px-10 md:px-12 rounded-full flex items-center justify-center gap-2 transition-transform transform hover:scale-110 shadow-lg mb-4 w-full max-w-xs"
>
  <FaInstagram className="text-xl sm:text-2xl" />
  Instagram ilə Əlaqə
</a>

{/* TikTok button */}
<a
  href="https://www.tiktok.com/@YOUR_TIKTOK_LINK"
  className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-8 sm:px-10 md:px-12 rounded-full flex items-center justify-center gap-2 transition-transform transform hover:scale-110 shadow-lg mb-6 w-full max-w-xs"
>
  <FaTiktok className="text-xl sm:text-2xl" />
  TikTok ilə Əlaqə
</a>

       
        </div>
      </div>
   
  );
}

export default App;

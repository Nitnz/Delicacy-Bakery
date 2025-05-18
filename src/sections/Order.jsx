import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  "/src/assets/Home.png",
  "/src/assets/p2.jpg",
  "/src/assets/p3.jpg",
];

const Order = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); 

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full min-h-screen pt-20 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            className="absolute w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[current]})` }}
            initial={{ x: direction > 0 ? '100%' : '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: direction > 0 ? '-100%' : '100%' }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
      </div>

      <div className="relative z-10 flex flex-col px-4 sm:px-6 lg:px-8  items-start ml-10 sm:ml-20 lg:ml-40 h-full justify-center mt-64 lg:mt-72">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-maglio mb-2 leading-tight">
          Celebrate
        </h1>
        <span className="text-lg sm:text-xl lg:text-3xl font-maglio">
          with our stunning cakes
        </span>
        <p className="text-lg sm:text-xl lg:text-3xl max-w-md font-maglio">
          Making every moment memorable and every bite divine
        </p>
        <button className="mt-4 px-6 py-3 bg-white text-[#281612] font-nav rounded-full hover:bg-orange-100 transition duration-300 text-lg sm:text-xl lg:text-2xl">
          Order Now
        </button>
        <div className="flex gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="px-4 py-2 bg-white text-[#281612] rounded hover:bg-orange-100 font-semibold transition">
          <i class='bx bx-chevron-left  text-base sm:text-lg lg:text-2xl'></i>

          </button>
          <button
            onClick={nextSlide}
            className="px-4 py-2 bg-white text-[#281612] rounded hover:bg-orange-100 font-semibold transition">
       <i className='bx bx-chevron-right  text-base sm:text-lg lg:text-2xl'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;



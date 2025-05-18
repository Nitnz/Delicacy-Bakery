import Baking from "../assets/logo/Baking.png";
const treat = () => {
  return (
  <main className="relative mt-20 w-full px-4 py-10">
  <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start max-w-7xl mx-auto gap-8">

    {/* Text Section */}
    <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left px-4 sm:px-6">
      <h1 className="font-maglio font-extrabold text-4xl sm:text-5xl lg:text-6xl text-gray-800">
        Treats for any Occasion
      </h1>
      <p className="mt-6 text-lg sm:text-xl lg:text-3xl font-maglio text-gray-600 leading-relaxed">
        <span className="text-2xl">❝</span> Layers of velvet, kissed with cream, a taste of dreams, a sugared gleam.
        Indulge in moments that softly gleam. Vanilla sighs and chocolate vows,
        raspberry kisses, soft as clouds. Every occasion, simple or grand,
        deserves a treat shaped by loving hands.
        Because celebration isn’t a moment, it’s a feeling—
        and we frost that feeling in beauty and meaning.
        <span className="text-2xl">❞</span>
      </p>
    </div>

    {/* Image Section */}
    <div className="w-full lg:w-1/2  lg:justify-end flex justify-center items-center">
      <img 
        src={Baking} 
        alt="Freshly baked goods" 
        className="max-w-full max-h-[400px] object-contain"
      />
    </div>

  </div>
</main>



  )
}

export default treat

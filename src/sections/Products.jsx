import p1 from "../assets/Logo/P1.png";
import p2 from "../assets/Logo/P2.jpg";
import P3 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
const Products = () => {
  return (
   <div className="relative h-[750px] bg-281612 text-white">
    <div className="flex flex-col items-center justify-center">
    <h1 className="text-4xl mt-10  font-romul">
      Our Products </h1>
      <p className="font-thin font-serif text-center mt-9 h-12 w-[550px]">
      For more than 25 years, Our Bakery has been making 
      America’s favorite baked goods the old-fashioned way: from scratch,
       in small batches, and using the finest ingredients.
      </p>
      <a href="#" className="font-medium mt-14 hover:underline ">VIEW MORE</a>
      </div>
      <div className="grid grid-cols-5 mt-10 gap-2 ">
        <div className="bg-white w-60 h-96 ">
        <img src={p4} className="h-[250px] w-[200px] ml-5 mt-4 transition-all duration-300 hover:scale-110"/> 
        <div className="text-black ml-12 mt-5 font-romul text-lg">Cocoa Luxe </div>
        <div className="text-black ml-12 mt-5 font-romul text-sm"> ＄ 42.00</div>
        </div>
        <div className="bg-white w-60 h-96">
        <img src={p2} className="h-[250px] w-[200px] ml-5 mt-4 transition-all duration-300 hover:scale-110"/> 
        <div className="text-black ml-12 mt-5 font-romul text-lg">Berry Blush </div>
        <div className="text-black ml-12 mt-5 font-romul text-sm"> ＄ 42.00</div>
        </div>
        <div className="bg-white w-60 h-96">
        <img src={p3} className="h-[250px] w-[200px] ml-5 mt-4 transition-all duration-300 hover:scale-110"/> 
        <div className="text-black ml-10 mt-5 font-romul text-lg">Velvet Whisper </div>
        <div className="text-black ml-12 mt-5 font-romul text-sm"> ＄ 42.00</div>
        </div>
        <div className="bg-white w-60 h-96">
        <img src={P3} className="h-[250px] w-[200px] ml-5 mt-4 transition-all duration-300 hover:scale-110"/> 
        <div className="text-black ml-12 mt-5 font-romul text-lg">Galaxy Swirl </div>
        <div className="text-black ml-12 mt-5 font-romul text-sm"> ＄ 42.00</div>
        </div>
        <div className="bg-white w-60 h-96">
        <img src={p1} className="h-[250px] w-[200px] ml-5 mt-4 transition-all duration-300 hover:scale-110"/> 
        <div className="text-black ml-16 mt-5 font-romul text-lg">Lava Love  </div>
        <div className="text-black ml-12 mt-5 font-romul text-sm"> ＄ 42.00</div>
         </div>
      </div>
  </div>
  )
}

export default Products

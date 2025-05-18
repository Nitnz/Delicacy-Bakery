import p1 from "../assets/Logo/P1.png";
import p2 from "../assets/Logo/P2.jpg";
import P3 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
const Products = () => {
  return (
  <div className="relative bg-[#281612] text-white w-full py-12 px-4 sm:px-8 lg:px-10">
  <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-maglio mt-6">Our Products</h1>
    <p className="font-maglio mt-6 max-w-xl text-lg sm:text-xl lg:text-3xl text-neutral-200">
      For more than Twenty Five years, Our Bakery has been making America’s favorite baked goods the old-fashioned way: 
      from scratch, in small batches, and using the finest ingredients.
    </p>
    <a href="#" className="font-medium mt-8 hover:underline">VIEW MORE</a>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 lg:gap-32 mt-28 place-items-center max-w-7xl mx-auto">
    {[
      { name: "Cocoa Luxe", price: "＄42.00", image: p4 },
      { name: "Berry Blush", price: "＄42.00", image: p2 },
      { name: "Velvet Whisper", price: "＄42.00", image: p3 },
      { name: "Galaxy Swirl", price: "＄42.00", image: P3 },
      { name: "Lava Love", price: "＄42.00", image: p1 }
    ].map((product, idx) => (
      <div key={idx} className="bg-white w-60 h-96 rounded-md shadow-md transition-transform hover:scale-105">
        <img
          src={product.image}
          alt={product.name}
          className="h-[250px] w-[200px] object-contain mx-auto mt-4 transition-all duration-300"
        />
        <div className="text-black text-center mt-5 font-romul text-lg">{product.name}</div>
        <div className="text-black text-center mt-2 font-romul text-sm">{product.price}</div>
      </div>
    ))}
  </div>
</div>


  )
}

export default Products

import D1 from "../assets/logo/D5.jpg";
import D2 from "../assets/logo/D2.jpg";
import D3 from "../assets/logo/D3.jpg";
import D4 from "../assets/logo/D4.jpg";
const delivery = () => {
  return (
   <div className="flex flex-col lg:flex-row items-center justify-center bg-281612 w-full text-white px-6 py-12 space-y-10 lg:space-y-0 lg:space-x-12 h-[600px] lg:gap-32">
  <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
    <img src={D4} className="h-60 object-contain" />
  </div>
  <div className="text-center lg:text-left lg:w-1/2">
    <h1 className="font-maglio font-extrabold text-4xl sm:text-5xl lg:text-6xl mb-4">Gifting & Events</h1>
    <p className="font-maglio text-neutral-200 text-lg sm:text-xl lg:text-3xl leading-relaxed max-w-xl mx-auto lg:mx-0">
      Make every celebration sweeter with our elegantly crafted cakes, perfect for any occasion. 
      From birthdays and weddings to corporate events, we bring flavor and style to your table. 
      Whether you're gifting or gathering, we help you share joy one slice at a time. 
      Let us turn your special moments into unforgettable memories</p>
    <div className="mt-6">
      <a href="#" className="font-semibold underline text-281612 bg-white px-4 py-2 rounded hover:bg-gray-200 transition"> VIEW MORE </a>
    </div>
  </div>
</div>

  
  )
}

export default delivery

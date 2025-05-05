import D1 from "../assets/logo/D5.jpg";
import D2 from "../assets/logo/D2.jpg";
import D3 from "../assets/logo/D3.jpg";
import D4 from "../assets/logo/D4.jpg";
const delivery = () => {
  return (
    <div class="flex flex-row bg-281612 w-full h-96 text-white">
      <div className="ml-5">‎</div>
       <div className="grid grid-cols-1 gap-4 mr-40 mt-20">
          <img src={D4} className="h-60  object-contain"/>
  </div>
      <div className="mt-24 mr-28 w-[600px]">  
        <h1 className='font-romul text-white text-2xl ml-32'>Gifting & Events</h1>
          <p className='mt-8 text-center font-thin font-serif'>Make every celebration sweeter with our elegantly crafted cakes, perfect for any occasion. From birthdays and weddings to corporate events, we bring flavor and style to your table. Whether you're gifting or gathering, we help you share joy one slice at a time.
             Let us turn your special moments into unforgettable memories.</p>
            <div>‎ </div>
             <a href='#' className='mt-4 font-semibold underline text-281612'>
            VIEWMORE
          </a>
  </div>
  </div>
  
  )
}

export default delivery

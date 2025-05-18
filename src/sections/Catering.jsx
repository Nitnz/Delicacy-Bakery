import A1 from "../assets/logo/A1.png";
import A2 from "../assets/logo/A2.png";
import A3 from "../assets/logo/A3.png";
const catering = () => {
  return (
  <div className="w-full h-auto lg:h-[400px] py-20 px-6">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-20 max-w-6xl mx-auto mt-14">
    <div className="flex flex-col items-center text-center">
      <img src={A1} className="h-16 w-20 mb-5 " />
      <div className=" text-281612 font-maglio text-lg sm:text-xl lg:text-3xl">
        Delivery and Pick Up Options
      </div>
    </div>
    <div className="flex flex-col items-center text-center">
      <img src={A2}  className="h-16 w-20 mb-5" />
      <div className="font-maglio text-lg sm:text-xl lg:text-3xl text-281612 ">
        Event Dessert Services
      </div>
    </div>
    <div className="flex flex-col items-center text-center">
      <img src={A3} className="h-16 w-20 mb-5" />
      <div className="font-maglio text-lg sm:text-xl lg:text-3xl text-281612 ">
        Luxury Cake Designs
      </div>
    </div>
  </div>
</div>

  )
}
export default catering

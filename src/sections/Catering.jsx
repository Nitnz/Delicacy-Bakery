import A1 from "../assets/logo/A1.png";
import A2 from "../assets/logo/A2.png";
import A3 from "../assets/logo/A3.png";
const catering = () => {
  return (
    <div className="w-full py-20">
      <div className="grid grid-cols-3 ml-56">
        <div><img src={A1} className="h-16 w-20 ml-14"/>
        <div className="mt-5 font-serif text-281612">Delivery and Pick Up Options</div></div>
        <div>
          <img src={A2} className="h-16 w-20 ml-10"/>
          <div className="mt-5 font-serif text-281612">
          Event Dessert Services</div>
          </div>
        <div><img src={A3} className="h-16 w-20 ml-5"/>
        <div className="mt-5 font-serif text-281612">
        Luxury Cake Designs</div></div>
      </div>
     
    </div>
  )
}

export default catering

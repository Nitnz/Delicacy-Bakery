const footer = () => {
  return (
    <footer>
    <div className="w-full h-[400px] bg-281612 grid grid-cols-3 ">
      <div className=" ml-28  text-white font-romul text-sm">
        <ul className=" space-y-4 mt-20">
          <li><a href="#">CAREER</a></li>
          <li><a href="#">PRESS</a></li>
          <li><a href="#">INTERNATIONAL FRANCHISE</a></li>
          <li><a href="#">SUBSCRIPTION</a></li>
          <li><a href="#">GIVING BACK</a></li>
          <li><a href="#">CAREER</a></li>
        </ul>
      </div>
      <div className="mt-20 text-white font-romul text-sm">
      <ul className=" space-y-4 ">
          <li><a href="#">HELP</a></li>
          <li><a href="#">RETURNS & REFUND</a></li>
          <li><a href="#">WHOLESALE</a></li>
          <li><a href="#">NEWSROOM</a></li>
        </ul >
      </div>
      <div className=" text-white text-sm grid grid-cols-2 gap-0 mt-20">
        <div>
          <i class='bx bx-current-location'>‎ SHOP ADDRESS</i>
        <div className="mt-5 font-sans mr-5">
          8389 W. Third St.
         (at Orlando St.)
         Los Angeles, CA 90048</div>
        </div>
        <div className=" h-10 ">
          <i class='bx bx-time'>‎ TIMING</i>
        <div className="mt-5 font-sans">
        Sun - Thur: 9AM - 8PM PST
        Fri - Sat: 9 AM - 9 PM PST</div>
        </div>
        <div className="mb-32"><i class='bx bxl-instagram' >‎ DELICASY_IG</i></div>
        <div><i class='bx bx-phone-call' >‎ (323) 951-0636</i></div>
      </div>
    </div>
    </footer>
  )
}

export default footer

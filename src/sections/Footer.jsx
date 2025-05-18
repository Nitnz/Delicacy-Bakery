const footer = () => {
  return (
   <footer>
  <div className="bg-281612 text-white grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8 py-20 px-6 max-w-10xl mx-auto">
    
    <div className="font-maglio text-lg sm:text-xl lg:text-3xl">
      <ul className="space-y-5">
        <li><a href="#" className="hover:underline">CAREER</a></li>
        <li><a href="#" className="hover:underline">PRESS</a></li>
        <li><a href="#" className="hover:underline">INTERNATIONAL FRANCHISE</a></li>
        <li><a href="#" className="hover:underline">SUBSCRIPTION</a></li>
        <li><a href="#" className="hover:underline">GIVING BACK</a></li>
      </ul>
    </div>

    <div className="font-maglio text-lg sm:text-xl lg:text-3xl space-y-4">
      <ul className="space-y-5">
        <li><a href="#" className="hover:underline">HELP</a></li>
        <li><a href="#" className="hover:underline">RETURNS & REFUND</a></li>
        <li><a href="#" className="hover:underline">WHOLESALE</a></li>
        <li><a href="#" className="hover:underline">NEWSROOM</a></li>
      </ul>
    </div>

    <div className="text-sm  grid grid-cols-1 sm:grid-cols-2 gap-6 font-sans">
      <div>
        <i className="bx bx-current-location font-maglio text-lg sm:text-xl lg:text-3xl mb-2 inline-block "> SHOP ADDRESS</i>
        <p className="font-serif text-lg sm:text-xl lg:text-3xl mt-2 leading-relaxed">
          8389 W. Third St.<br />
          (at Orlando St.)<br />
          Los Angeles, CA 90048
        </p>
      </div>
      <div>
        <i className="bx bx-time font-maglio text-lg sm:text-xl lg:text-3xl mb-2 inline-block"> TIMING</i>
        <p className="mt-2  font-serif text-lg sm:text-xl lg:text-3xl leading-relaxed">
          Sun - Thur: 9AM - 8PM PST<br />
          Fri - Sat: 9 AM - 9 PM PST
        </p>
      </div>
      <div>
        <i className="bx bxl-instagram text-lg mb-2 inline-block"> DELICASY_IG</i>
      </div>
      <div>
        <i className="bx bx-phone-call text-lg mb-2 inline-block"> (323) 951-0636</i>
      </div>
    </div>
  </div>
</footer>

  )
}

export default footer

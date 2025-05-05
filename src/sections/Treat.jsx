import Baking from "../assets/logo/Baking.png";
const treat = () => {
  return (
    <main className="relative mt-20 h-[500px] w-full">
      <div className="flex">
        <div className="bg-white h-[100px] w-[900px] justify-start py-24">
          <h1 className="font-romul font-extrabold text-3xl ml-40">
            Treats for any Occasion</h1>
         <p className="py-10 font-light ml-10 text-center w-[700px]"> <span className="text-2xl">❝</span>
          ‎  Layers of velvet, kissed with cream, A taste of dreams, a sugared gleam.
            Indulge in moments that softly gleam.Vanilla sighs and chocolate vows,
            Raspberry kisses, soft as clouds.
            Every occasion, simple or grand,
            Deserves a treat shaped by loving hands.
            Because celebration isn’t a moment, it’s a feeling—
            And we frost that feeling in beauty and meaning.<span  className="text-2xl ">❞</span></p>
          </div>
        <div className="-mt-10">
          <img src={Baking} className="h-[500px]"/>
        </div>
      </div>
  
    </main>
  )
}

export default treat

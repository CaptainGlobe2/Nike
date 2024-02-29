import { offer } from "../assets/images"
import Button from "../components/Button"
import { arrowRight } from "../assets/icons";


const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img src={offer} alt="" width={773} height={687} className="object-contain w-full" />

      </div>
      <div className="flex flex-1 flex-col">
          
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red inline-block mt-3">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        Step into style with our exclusive shoe collection! For a limited time only, enjoy unbeatable discounts on the latest trends in footwear. Elevate your look with premium comfort and unmatched quality
        </p>
        <p className="mt-6 lg:max-w-lg info-text"> Don't miss out on this exclusive opportunity to step up your shoe game. Explore our collection today and walk your path with unmatched elegance.</p>
        <div className="mt-11 flex flex-wrap gap-4">
        <Button label="Shop Now" iconURL={arrowRight}/>
        <Button label="Learn More" backgroundColor="bg-white" borderColor = "border-slate-gray" textColor="text-slate-gray"/>
        </div>
        </div>

    </section>
  )
}

export default SpecialOffer
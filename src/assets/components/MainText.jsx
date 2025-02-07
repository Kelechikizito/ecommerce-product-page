import CartIcon from "../images/icon-cart.svg?react";
import PlusIcon from "../images/icon-plus.svg?react";
import MinusIcon from "../images/icon-minus.svg?react";

const MainText = () => {
  return (
    <div className="flex flex-col gap-8 justify-center">
        <div className="flex flex-col gap-4">
            <h1 className="text-[#ff7e1b] font-extrabold tracking-[0.2em] text-[0.75rem]">SNEAKER COMPANY</h1>
            <h1 className="text-5xl font-bold">Fall Limited Edition Sneakers</h1>
        </div>

        <div>
            <p className="font-sans font-normal leading-[26px] text-[#69707d]">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        </div>

        <div>
            <div>
                <p className="text-2xl font-extrabold flex gap-4">$125.00<span className="font-semibold text-sm text-[#ff7e1b] px-2 my-2 rounded-md bg-[#ff7e1b1e]">50%</span></p>
            </div>

            <div>
                <p className="line-through font-sans font-normal leading-[26px] text-[#69707d] text-sm">$250.00</p>
            </div>
        </div>

        <div className="flex gap-4">
            <div className="w-[35%]">
                <p className="flex justify-between h-full p-4 font-semibold rounded-xl bg-[#f6f8fd]">
                    <span className="flex justify-center items-center"><MinusIcon /></span>
                        0
                    <span className="flex justify-center items-center"><PlusIcon /></span>
                </p>
            </div>

            <div className="w-[65%] flex justify-center items-center">
                <button className="w-[100%] h-full flex justify-center items-center gap-4 font-sans leading-[26px] text-white bg-[#ff7e1b] font-semibold rounded-xl">
                    <CartIcon className='text-white'/> 
                    Add to cart
                </button>
            </div>
        </div>
    </div>
  )
}

export default MainText
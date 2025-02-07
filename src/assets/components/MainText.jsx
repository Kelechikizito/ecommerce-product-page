import CartIcon from "../images/icon-cart.svg?react";

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
                <p>$125.00<span>50%</span></p>
            </div>

            <div>
                <p>$250.00</p>
            </div>
        </div>

        <div>
            <div>
                <p>
                    <span>-</span>
                        0
                    <span>+</span>
                </p>
            </div>

            <div>
                <button><CartIcon /> Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default MainText
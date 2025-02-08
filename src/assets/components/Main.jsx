import ProductImages from "./ProductImages"
import MainText from "./MainText"

const Main = () => {
  return (
    <div className="pt-20 grid grid-cols-2 px-8 gap-16">
        <div>
            <ProductImages />
        </div>

        <div className="flex flex-col justify-center">
            <MainText />
        </div>
    </div>
  )
}

export default Main
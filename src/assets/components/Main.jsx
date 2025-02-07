import ProductImages from "./ProductImages"
import MainText from "./MainText"

const Main = () => {
  return (
    <div className="pt-20 grid grid-cols-2">
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
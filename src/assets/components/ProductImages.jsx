import ProductOne from '../images/image-product-1.jpg'
import ProductOneThumbnail from '../images/image-product-1-thumbnail.jpg'
import ProductTwo from '../images/image-product-2.jpg'
import ProductTwoThumbnail from '../images/image-product-2-thumbnail.jpg'
import ProductThree from '../images/image-product-3.jpg'
import ProductThreeThumbnail from '../images/image-product-3-thumbnail.jpg'
import ProductFour from '../images/image-product-4.jpg'
import ProductFourThumbnail from '../images/image-product-4-thumbnail.jpg'



const ProductImages = () => {
  return (
    <div className='flex flex-col gap-10'>
        <div>
            <img src={ProductOne} alt='' className='size-[28rem]'/>
        </div>

        <div className='flex justify-between'>
            <img src={ProductOneThumbnail} alt='' className='size-[6rem]'/>
            <img src={ProductTwoThumbnail} alt='' className='size-[6rem]'/>
            <img src={ProductThreeThumbnail} alt='' className='size-[6rem]'/>
            <img src={ProductFourThumbnail} alt='' className='size-[6rem]'/>
        </div>
    </div>
  )
}

export default ProductImages
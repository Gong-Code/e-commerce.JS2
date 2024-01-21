import { useParams } from 'react-router-dom'

// contexts
import { CartContext, useCartContext } from '../../context/CartContext'
import { ProductsContext, useProductsContext } from '../../context/ProductContext'

function ProductDetailsPage() {
  
  const { _id } = useParams()
  
  const { products } = useProductsContext(ProductsContext)

  const { addToCart } = useCartContext(CartContext)

  const product = products.find(item => {
    return item._id === _id
  })

  if (!product) {
    return <section className='text-white h-screen flex justify-center'>
      Loading...
    </section>
  }

  const { name, price, description, images } = product;

  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex
    items-center'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row items-center'>
          {/* image */}
          <div className='flex flex-1 justify-center items-center
          mb-8 lg:mb-0'>
            <img className='max-w-[200px] lg:max-w-sm' 
            src={images[0]} alt='image of electronic device' />
          </div>
          {/* text */}
          <div className='text-emerald-600 flex-1 text-center lg:text-left'>
            <h1 className='text-[26px] font-medium mb-2 max-w-[450px]
            mx-auto lg:mx-0'>{name}
            </h1>
            <div className='text-xl text-orange-500 font-medium mb-6'>
              {price} SEK
            </div>
            <p className='mb-8'>{description}</p>
            <button onClick={() => addToCart(_id, product)} className='text-white bg-emerald-700 
            py-4 px-8 rounded-md hover:bg-emerald-600'>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetailsPage
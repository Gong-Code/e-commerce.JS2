import { useProductsContext } from '../../context/ProductContext'
import { Product } from '../../components/Product';


function HomePage() {

  const { products } = useProductsContext()

  const getAllProducts = products.map(product => (product))

  return (
    <div>
      <section className='py-16'>
        <div className='container mx-auto '>
          <div className='grid grid-cols-1 md:grid-cols-2 
          lg:grid-cols-4 xl:grid-cols-6 gap-[30px] max-w-sm 
          mx-auto md:max-w-none md:mx-0'>
              {
                getAllProducts.map(product => {
                  return <Product key={product._id} product={product} />
                })
              }
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage


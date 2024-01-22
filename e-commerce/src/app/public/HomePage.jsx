import { useProductsContext } from '../../context/ProductContext'
import { Product } from '../../components/Product';
import { DropdownPage } from './DropdownPage';
import { useState } from 'react';

function HomePage() {

  const { products } = useProductsContext()

  const [selectedCategory, setSelectedCategory] = useState('');

  const onCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory 
  ? products.filter(product => product.category === selectedCategory)
  : products;

  return (
    <div>
      <DropdownPage products={products} onCategoryChange={onCategoryChange} />
      <section className='py-16'>
        <div className='container mx-auto '>
          <div className='grid grid-cols-1 md:grid-cols-2 
          lg:grid-cols-4 xl:grid-cols-6 gap-[30px] max-w-sm 
          mx-auto md:max-w-none md:mx-0'>
              {
                filteredProducts.map(product => {
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


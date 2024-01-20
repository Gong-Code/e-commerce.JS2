import { createContext, useContext, useEffect, useState } from "react";

export const ProductsContext = createContext()

const ProductsContextProvider = ({ children }) => {

    const [url, setUrl] = useState('https://js2-ecommerce-api.vercel.app/api/products')
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getAllProducts = async () => {

            try {
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
    
                const data = await response.json();
                console.log(data)
                setProducts(data)
            } catch (error) {
                console.error('Error:', error);
            }
        }
    
        getAllProducts()
    }, [url])

    return(
        <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>
    )
}

export default ProductsContextProvider

export const useProductsContext = () => {
    const context = useContext(ProductsContext)

    if(!context) throw new Error("useProductsContext must be called within a PostContextProvider")

    return context
}

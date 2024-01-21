import toast from 'react-hot-toast';
import { CheckoutItem } from '../../components/CheckoutItem';
import { CartContext, useCartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom';


function CheckoutPage() {
    
    const { cart, totalPrice, clearCart } = useCartContext(CartContext)

    const navigate = useNavigate()

    const tax = 20;

    const handlePay = () => {
        if (cart.length === 0) {
            toast.error("Your cart is empty. Please add items before making a payment.");
        } else {
            toast.success("Payment successful!");
            clearCart();
            navigate('/');
        }
    };

    return (
        <div className=" h-screen py-8">
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-semibold mb-4 text-white">Shopping Cart</h1>
            <div className="flex flex-col md:flex-row gap-4 text-white">
                <div className="md:w-3/4">
                    <div className="bg-emerald-800 rounded-lg shadow-md p-6 mb-4">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="text-left font-semibold">Product</th>
                                    <th className="text-left font-semibold">Price</th>
                                    <th className="text-left font-semibold">Quantity</th>
                                    <th className="text-left font-semibold">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map(item => {
                                        return <CheckoutItem key={item._id} item={item} />
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="md:w-1/4">
                    <div className="bg-emerald-800 rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-semibold mb-4">Summary</h2>
                        <div className="flex justify-between mb-2">
                            <span>Subtotal</span>
                            <span>{totalPrice} SEK</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Taxes</span>
                            <span>20 SEK</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Shipping</span>
                            <span>0.00 SEK</span>
                        </div>
                        <hr className="my-2" />
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold">Total</span>
                            <span className="font-semibold">{totalPrice + tax} SEK</span>
                        </div>
                        <button onClick={handlePay} className="bg-orange-500 text-white py-2 px-4 
                        rounded-lg mt-4 w-full hover:bg-blue-600">
                            Pay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CheckoutPage
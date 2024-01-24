import { createBrowserRouter } from "react-router-dom";

//layouts
import RootLayout from "./app/RootLayout";
import PublicLayout from "./app/public/PublicLayout";
import AuthLayout from "./app/auth/AuthLayout";
import PrivateLayout from "./app/private/PrivateLayout";

//pages
import HomePage from "./app/public/HomePage";
import ContactPage  from "./app/public/ContactPage";
import ProductDetailsPage  from "./app/public/ProductDetailsPage";
import SidebarPage from "./app/public/SidebarPage";
import CheckoutPage from "./app/public/CheckoutPage";
import LoginPage from "./app/auth/LoginPage";
import RegisterPage from "./app/auth/RegisterPage";
import OrderHistoryPage from "./app/private/OrderHistoryPage";


export const router = createBrowserRouter([
    {
        path:"/",
        element: <RootLayout />,
        children:[
            {
                path: "/",
                element: <PublicLayout />,
                children: [
                    {
                        index: true,
                        element: <HomePage />
                    },
                    {
                        path: "contact",
                        element: <ContactPage />
                    },
                    {
                        path: "/product/:_id",
                        element: <ProductDetailsPage />
                    },
                    {
                        path: "sidebar",
                        element: <SidebarPage />
                    },
                    {
                        path: "checkout",
                        element: <CheckoutPage />
                    },
                ]
            },

            {
                path:"auth",
                element: <AuthLayout />,
                children: [
                    {
                        path: "login",
                        element: <LoginPage />,
                    },
                    {
                        path: "register",
                        element: <RegisterPage />

                    }
                ]
            },


            {
                path: "private",
                element: <PrivateLayout />,
                children: [
                    {
                        index: true,
                        element: <OrderHistoryPage />
                    }
                ]

            }


        ]
    }
])
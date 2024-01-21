import { createBrowserRouter } from "react-router-dom";

//layouts
import RootLayout from "./app/RootLayout";
import PublicLayout from "./app/public/PublicLayout";

//pages
import HomePage from "./app/public/HomePage";
import ContactPage  from "./app/public/ContactPage";
import ProductDetailsPage  from "./app/public/ProductDetailsPage";
import SidebarPage from "./app/public/SidebarPage";
import CheckoutPage from "./app/public/CheckoutPage";

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
            }
        ]
    }
])
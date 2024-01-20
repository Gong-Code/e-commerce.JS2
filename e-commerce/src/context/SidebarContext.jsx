import { createContext, useContext, useState } from "react";

export const SidebarContext = createContext();

const SidebarContextProvider = ({children}) => {
    
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen(prevState => !prevState)
    }

    return (
        <SidebarContext.Provider value={{isOpen, setIsOpen, handleClose}}>{children}</SidebarContext.Provider>
    )
}

export default SidebarContextProvider

export const useSidebarContext = () => {
    const context = useContext(SidebarContext)

    if(!context) throw new Error("useSidebarContext must be called within a SidebarContextProvider")

    return context
}
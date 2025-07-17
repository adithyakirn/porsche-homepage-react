import { createContext, useContext, useState } from "react";

const LoadingContext = createContext()

export const useLoading = () => useContext((LoadingContext))

export const LoadingProvider = ({children}) => {
    const [loading, setIsLoading] = useState(false)
    
    return(
        <LoadingContext.Provider value={{loading, setIsLoading}}>
        {children}
    </LoadingContext.Provider>
)
}
import { createContext, useContext } from "react";

export const ModelContext = createContext()

export function useModel(){
    return useContext(ModelContext)
}
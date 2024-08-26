import { useContext } from "react"
import { productContext } from "../context/ProductProvider"

export function useProduct() {

    const context = useContext(productContext)

  if(context === undefined){
    throw new Error("useProduct must be used within a ProductProvider")
  }
  return context
}
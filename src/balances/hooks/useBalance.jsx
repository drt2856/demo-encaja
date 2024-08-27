import { useContext } from "react"
import { balanceContext } from "../context/BalanceProvider"

export function useBalance() {

    const context = useContext(balanceContext)

  if(context === undefined){
    throw new Error("useBalance must be used within a BalanceProvider")
  }
  return context
}
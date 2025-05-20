import { createContext } from "react"
import RequestProvider from "./RequestProvider"
import WishListProvider from "./WishListProvider"
import BasketProvider from "./BasketProvider"


function MainProvider({ children }) {
  return (
    <BasketProvider>
      <WishListProvider>
        <RequestProvider>
          {children}
        </RequestProvider>
      </WishListProvider>
    </BasketProvider>
  )
}

export default MainProvider
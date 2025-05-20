import { createContext, useState } from "react"

export const WishListContext=createContext()

function WishListProvider({children}) {
const [wish, setWish] = useState([])


function addWish(obj){
    const addedElement= wish.find(x=>x._id===obj._id)
    if(addedElement){
      return
    }
    else{
      setWish([...wish,{...obj}])
    }
  }

   function removeWish(id){
    setWish(wish.filter(x=>x._id !== id))
  }

  function totalWish(){
    return wish.reduce((total,initial)=>total+(initial.price),0)
  }

  function checkIsWish(id){
    return wish.some(x=>x._id===id)
  }


  return (
    <WishListContext.Provider value={{addWish,removeWish,totalWish,checkIsWish,wish}}>
      {children}
    </WishListContext.Provider>
  )
}

export default WishListProvider
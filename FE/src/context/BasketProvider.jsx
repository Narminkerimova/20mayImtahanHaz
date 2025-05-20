import { createContext, useState } from "react"

export const BasketContext=createContext()

function BasketProvider({children}) {
  const [basket, setBasket] = useState([])

  function addBasket(obj){
    const addedElement= basket.find(x=>x._id===obj._id)
    if(addedElement){
      addedElement.count++
      setBasket([...basket])
    }
    else{
      setBasket([...basket,{...obj,count:1}])
    }
  }

   function decreaseBasket(obj){
    const addedElement= basket.find(x=>x._id===obj._id)
    if(addedElement.count===1){
      return
    }
    else{
       addedElement.count--
      setBasket([...basket])
    }
  }

   function removeBasket(id){
    setBasket(basket.filter(x=>x._id !== id))
  }

  function totalBasket(){
    return basket.reduce((total,initial)=>total+(initial.price*initial.count),0)
  }

  function checkIsBasket(id){
    return basket.some(x=>x._id===id)
  }



  return (
    <BasketContext.Provider value={{addBasket,basket,decreaseBasket,removeBasket,totalBasket,checkIsBasket}}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider
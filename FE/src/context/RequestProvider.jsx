import { createContext, useEffect, useState } from "react"


export const RequestContext = createContext()

function  RequestProvider({ children }) {
  const [product, setProduct] = useState([])
  const url = "http://localhost:3000/clothes/"
  
  async function getElement(url) {
    try {
      const res = await fetch(url)
      const data = await res.json()
      setProduct(data)

    } catch (error) {
      console.log(error);

    }
  }

  async function deleteElement(url, id) {
    try {
      const res = await fetch(url + id, {
        method: "DELETE"
      })
      getElement(url)

    } catch (error) {
      console.log(error);

    }
  }

  async function postElement(url, body) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      const data = await res.json()
      setProduct(data)

    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    getElement(url)
  }, [])



  return (
    <RequestContext.Provider value={{ product, deleteElement, url ,postElement}}>
      {children}
    </RequestContext.Provider>
  )
}

export default RequestProvider
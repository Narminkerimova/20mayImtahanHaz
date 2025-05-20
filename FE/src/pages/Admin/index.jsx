import { useContext, useState } from "react"
import { RequestContext } from "../../context/RequestProvider"
import "./style.css"

function Admin() {
  const {product,deleteElement,url} = useContext(RequestContext)
  const [search, setSearch] = useState("")
  const [sortProp, setsortProp] = useState({
    property:"",
    order:true
  })

  if(product.length===0){
    return <p>Loading...</p>
  }
  return (
    <>
    <title>Admin Page</title>
    <input type="text" onChange={(e)=>setSearch(e.target.value)}/>
    <div className="buttons">
      <button onClick={()=>setsortProp({property:"price",order:true})}>Artma</button>
      <button onClick={()=>setsortProp({property:"price",order:false})}>Azalma</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Price</th>
          <th>image</th>
          <th>Delete Button</th>
        </tr>
      </thead>
      <tbody>
        {

          product
          .toSorted((a,b)=>{
            if(sortProp.order){
              return (a[sortProp.property] > b[sortProp.property]) ? 1 : ((b[sortProp.property] > a[sortProp.property]) ? -1 : 0)
            }
            else{
              return (a[sortProp.property] < b[sortProp.property]) ? 1 : ((b[sortProp.property] < a[sortProp.property]) ? -1 : 0)

            }
          })
          .filter(x=>x.name.toLowerCase().includes(search.toLowerCase()))
          .map((item,i)=>(
            <tr key={item._id}>
              <td>{i+1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <img src={item.image} alt="image" /></td>
              <td>
                <button onClick={()=>deleteElement(url,item._id)}>Delete</button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
    
    </>
  )
}

export default Admin
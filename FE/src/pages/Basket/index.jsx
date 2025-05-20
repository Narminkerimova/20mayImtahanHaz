import { useContext } from "react"
import { FaCircleInfo } from "react-icons/fa6";
import { Link } from "react-router";
import { BasketContext } from "../../context/BasketProvider"

function Basket() {
  const { addBasket, basket,decreaseBasket,removeBasket,totalBasket } = useContext(BasketContext)

  if (basket.length === 0) {
    return <p>Basketde hecne yoxdur</p>
  }

  return (
    <>
      <title>Basket</title>
      <h1>Total:{totalBasket()}</h1>
      <div className="container">
        {
          basket.map((item) => (
              <div className="card" key={item._id}>
                <div className="card_image">
                  <img src={item.image} alt="image" />
                </div>
                <div className="card_title">
                  <div className="card_name">{item.name}</div>
                  <div className="card_price">{item.price}</div>
                </div>
                <div className="card_button">
                  <button onClick={() => addBasket(item)}>+</button>
                  <div className="card_count">Count:{item.count}</div>
                  <button onClick={()=>decreaseBasket(item)}>-</button>
                  <Link to={`detail/${item._id}`}>
                    <button><FaCircleInfo /></button>
                  </Link>
                  <button onClick={()=>removeBasket(item._id)}>Remove</button>
                </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Basket
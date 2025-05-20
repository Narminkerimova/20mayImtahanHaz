import { useContext } from "react"
import { WishListContext } from "../../context/WishListProvider"
import {Link} from "react-router"
import { FaCircleInfo } from "react-icons/fa6";

function WishList() {
  const {totalWish,wish,removeWish} = useContext(WishListContext)
  return (
    <>
      <title>WishList</title>
      <h1>Total:{totalWish()}</h1>
      <div className="container">
        {
          wish.map((item) => (
              <div className="card" key={item._id}>
                <div className="card_image">
                  <img src={item.image} alt="image" />
                </div>
                <div className="card_title">
                  <div className="card_name">{item.name}</div>
                  <div className="card_price">{item.price}</div>
                </div>
                <div className="card_button">
                  <Link to={`detail/${item._id}`}>
                    <button><FaCircleInfo /></button>
                  </Link>
                  <button onClick={()=>removeWish(item._id)}>Remove</button>
                </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default WishList
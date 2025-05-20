import { useContext } from "react"
import { FaBasketShopping } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";
import { FaCircleInfo } from "react-icons/fa6";
import { FaHeartBroken } from "react-icons/fa";
import {Link} from "react-router"
import { IoBagRemove } from "react-icons/io5";
import { RequestContext } from "../../context/RequestProvider"
import "./style.css"
import { BasketContext } from "../../context/BasketProvider";
import WishList from "../Wish List";
import { WishListContext } from "../../context/WishListProvider";

function Cards() {
  const { product } = useContext(RequestContext)
  const {addBasket,checkIsBasket,removeBasket} = useContext(BasketContext)
  const {addWish,checkIsWish,removeWish} = useContext(WishListContext)


  if (product.length === 0) {
    return <p>Loading...</p>
  }
  return (
    <>
      <div className="container">
        {
          product.map((item) => (
            <div className="card" key={item._id}>
              <div className="card" key={item._id}>
                <div className="card_image">
                  <img src={item.image} alt="image" />
                </div>
                <div className="card_title">
                  <div className="card_name">{item.name}</div>
                  <div className="card_price">{item.price}</div>
                </div>
                <div className="card_button">
                  {
                    checkIsBasket(item._id) ? <button onClick={()=>removeBasket(item._id)}><IoBagRemove /></button> : <button onClick={()=>addBasket(item)}><FaBasketShopping /></button>
                  }
                  {
                    checkIsWish(item._id) ? <button onClick={()=>removeWish(item._id)}><FaHeartBroken /></button> : <button onClick={()=>addWish(item)}><MdFavorite /></button>
                  }
                  
                  <Link to={`detail/${item._id}`}>
                  <button><FaCircleInfo /></button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Cards
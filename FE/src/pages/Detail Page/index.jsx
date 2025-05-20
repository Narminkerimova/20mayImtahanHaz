import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router"
import { FaBasketShopping, FaCircleInfo } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";
import { RequestContext } from "../../context/RequestProvider";
import "./style.css"



function DetailPage() {
  const { _id } = useParams()
  const { url } = useContext(RequestContext)
  const [detail, setDetail] = useState({})
  console.log(url);

  async function getElementById(url, id) {
    try {
      const res = await fetch(url + id)
      const data = await res.json()
      setDetail(data)
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    getElementById(url, _id)
  }, [])


  return (
    <>
      <title>Detail Page</title>
      <div className="detail_container">
        <div className="card">
          <div className="card" key={detail._id}>
            <div className="card_image">
              <img src={detail.image} alt="image" />
            </div>
            <div className="card_title">
              <div className="card_name">{detail.name}</div>
              <div className="card_price">{detail.price}</div>
            </div>
            <div className="card_button">
              <button><FaBasketShopping /></button>
              <button><MdFavorite /></button>
              <button><FaCircleInfo /></button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default DetailPage
import { useContext } from "react"
import { Link } from "react-router"
import { IoMdMenu } from "react-icons/io";
import { BasketContext } from "../../context/BasketProvider"
import "./style.css"
import logo from '../../image/logo.webp'

function Header() {
  const { basket } = useContext(BasketContext)
  return (
    <header>
      <div className="container_web_site">
        <nav className="top_nav">
          <div className="left_top_box">
            <div className="left_nav_num left_nav">+12312-3-1209</div>
            <div className="left_nav_mail left_nav">support@colorlib.com</div>
          </div>
          <div className="right_top_box">login</div>
        </nav>
        <nav className="bottom_nav">
          <div className="bottom_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="bottom_link">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
              <li>
                <Link to="/adminadd">Admin Add</Link>
              </li>
              <li>
                <Link to="/basket">Basket</Link> {basket.length}
              </li>
              <li>
                <Link to="/wishlist">Wishlist</Link>
              </li>
            </ul>
          </div>
          <div className="nav_hidden">
            <button className="nav_button_hidden"><IoMdMenu /></button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
import { useSelector } from "react-redux"
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { Link } from "react-router-dom";
const Header = () => {
  const bag = useSelector(store => store.bag)
  console.log(bag);
  return <>
    <header>
      <div className="logo_container">
        <Link to="/"><img className="myntra_home" src="public/images/myntra_logo.webp" alt="Myntra Home" /></Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <Link to="#">Kids</Link>
        <Link to="/">Home & Living</Link>
        <a href="#">Beauty</a>
        <a href="#">Studio <sup>New</sup></a>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input className="search_input" placeholder="Search for products, brands and more" />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <span><CgProfile /></span>
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <span><FaHeart /></span>
          <span className="action_name">Wishlist</span>
        </div>

        <Link className="action_container" to="/bag">
          <span><IoBag /></span>
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  </>
}
export default Header;
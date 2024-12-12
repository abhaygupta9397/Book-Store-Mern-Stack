
import { FaBars } from "react-icons/fa";
import {Link} from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import avatarImg from "../assets/avatar.png";
import { useState  } from "react";
import { useSelector } from "react-redux";

const navigation = [
  {name: "Dashboard", href:"/user-dashboard"},
  {name: "Orders", href:"/orders"},
  {name: "Cart Page", href:"/cart"},
  {name: "Check Out", href:"/checkout"},
]

const Navbar = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 const cartItems = useSelector(state => state.cart.cartItems);
   console.log(cartItems);

  const handleLogOut = () => {
    
}
  const currentuser = false;
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* left side */}
        <div className="flex items-center md:gap-16 gap-4">
            <Link to="/">
            <FaBars className="size-6"/>
            </Link>

            {/* search input */}
            <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearchOutline className="absolute inline-block left-3 inset-y-2" />
            <input type="text" placeholder="Search here" 
            className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md
            focus:outline-none"
            />
            </div>
          
        </div>

        {/* right side */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {
              currentuser ?
               <>
               <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <img src={avatarImg} alt="logo" className={`size-7 rounded-full ${currentuser ? 'ring-2 ring-blue-500' : ''}`} />
               </button>
               {/* show dropdown */}
               {
                isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                      <ul className="py-2">
                          {
                              navigation.map((item) => (
                                  <li key={item.name} onClick={() => setIsDropdownOpen(false)}>
                                      <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                                          {item.name}
                                      </Link>
                                  </li>
                              ))
                          }
                          <li>
                              <button
                              onClick={handleLogOut}
                              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Logout</button>
                          </li>
                      </ul>
                  </div>
                )
               }
               </> : <Link to="/login"> <FaUser className="size-6"/> </Link>
            }
          </div>
        
        <button className="hidden sm:block">
            <CiHeart className="size-6"/>
        </button>    
        <Link to="/cart" className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm ">
        <FaShoppingCart className=''/>
        {
          cartItems.length > 0 ? 
          <span className="text-sm font-semibold sm:ml-1">{cartItems.length}</span> :
          <span className="text-sm font-semibold sm:ml-1">0</span>
        }
      </Link>
        
        </div>
      </nav>
    </header>
  )
}

export default Navbar
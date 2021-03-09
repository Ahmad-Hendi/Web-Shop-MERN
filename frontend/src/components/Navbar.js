import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({ click }) => {

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    }

    return (
        <nav className="navbar">
            {/* LOGO */}
            <div className="navbar__logo">
                <h2>
                    MERN shopping cart
                </h2>
            </div>

            {/* LINKS */}
            <ul className='navbar__links'>
                <li> {/* each li will contain a link that will help us with the routing */}
                    <Link to="/cart" className="cart__link">
                        {/* Icon */}
                        <i className="fas fa-shopping-cart"></i>
                        <span>

                        Cart
                            <span className="cartlogo__badge">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
                <li> 
                    <Link to="/">
                       Shop
                    </Link>
                </li>                              
            </ul>
            {/* hamburger menu */}
            <div className='hamburger__menu' onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}


            

export default Navbar

import './styles/Header.css'
import logo from '../assets/images/logo.svg'
import kart from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'
import close from '../assets/images/icon-close.svg'
import Cart from './Cart'
import { useState } from 'react'


const Header = ({ addToCart, images, handleDelete, showCart, setShowCart, hidden, setHidden }) => {

    const [count, setCount] = useState(0)
    const [burger, setBurger] = useState(false)
    const [menu, setMenu] = useState(false)


    const handleOpenCart = () => {
        setShowCart(!showCart)
        setMenu(false)
        setHidden(false)
    }

    const handleMenu = () => {
        setBurger(!burger)
        setMenu(!menu)
        setShowCart(false)
        setHidden(!hidden)
    }

    return (
        <header className='header'>
            <div className='logo-menu'>
                <div className='menu-hamburger'>
                    <button onClick={handleMenu} className={!burger ? "burger" : "close"}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                </div>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                <div className={!menu ? "menu" : "show-menu"}>
                    <ul>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    <div className='close-nav'>
                        <img src={close} alt="" />
                    </div>
                </div>
            </div>
            <div className='cart-perfil'>
                <div className='cart' onClick={handleOpenCart}>
                    <img src={kart} alt="" />
                    <div className='number-cart'>
                        {
                            addToCart >= 1 ? <p>{addToCart}</p> : ""
                        }

                    </div>
                </div>
                <div className='perfil'>
                    <img src={avatar} alt="" />
                </div>
            </div>

            {
                showCart &&
                <Cart
                    addToCart={addToCart}
                    images={images}
                    handleDelete={handleDelete}
                    count={count}
                    setCount={setCount}
                />
            }

        </header>
    )
}

export default Header
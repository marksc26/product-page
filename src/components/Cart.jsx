import React, { useEffect } from 'react'
import './styles/Cart.css'
import trash from '../assets/images/icon-delete.svg'

const Cart = ({ addToCart, images, handleDelete, count, setCount }) => {


    const total = count * 125

    useEffect(() => {
        setCount(addToCart)
    }, [addToCart])

    return (
        <section className='cart-section'>

            <h3 className='title-cart'>Cart</h3>
            <hr className='hr' />

            {
                count === 0 ? <div className='empty'><p>Your car is empty.</p></div> : (
                    <div>
                        <div className='product-cart'>
                            <div>
                                <img className='img-cart' src={images.images[0].thumbnail} alt="" />
                            </div>
                            <div >
                                <p>Fall Limited Edition Sneakers</p>
                                <p>$125.00 x {count} <span className='span'>${total}.00</span></p>
                            </div>
                            <div className='trash'>
                                <img onClick={handleDelete} src={trash} alt="" />
                            </div>
                        </div>

                        <div className='button-checkout'>
                            <button>Checkout</button>
                        </div>
                    </div>
                )
            }




        </section>
    )
}

export default Cart
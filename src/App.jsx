import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import data from '../public/data.json'
import minus from './assets/images/icon-minus.svg'
import plus from './assets/images/icon-plus.svg'
import cart from './assets/images/kart-button.png'
import Modal from './components/Modal'
import Footer from './components/Footer'
import prev from './assets/images/icon-previous.svg'
import next from './assets/images/icon-next.svg'

function App() {

  const [value, setValue] = useState(0)
  const [counter, setCounter] = useState(0)
  const [images, setImages] = useState(data)
  const [showModal, setShowModal] = useState(false)
  const [addToCart, setAddToCart] = useState(
    JSON.parse(localStorage.getItem("addToCart")) || 0
  )
  const [showCart, setShowCart] = useState(false)
  const [hidden, setHidden] = useState(false)


  const handleMinus = () => {
    if (counter >= 1) {
      setCounter(counter - 1)
    }
  }

  const handlePlus = () => {
    setCounter(counter + 1)
  }

  const handleAddToCart = () => {
    if (addToCart === 0) {
      setAddToCart(counter)
      localStorage.setItem("addToCart", JSON.stringify(counter))
    }

    setCounter(0)

  }

  const handleDelete = () => {
    setAddToCart(0)
    setCounter(0)
    localStorage.removeItem("addToCart")
  }

  const handleModal = () => {
    setShowModal(true)
    setShowCart(false)
  }

  const handlePrev = () => {
    setValue((value - 1 + images.images.length) % images.images.length)
  }

  const handleNext = () => {
    setValue((value + 1) % images.images.length)
  }



  return (
    <main className={!hidden ? "main" : "hidden"}>
      <Header
        addToCart={addToCart}
        images={images}
        handleDelete={handleDelete}
        showCart={showCart}
        setShowCart={setShowCart}
        setHidden={setHidden}
        hidden={hidden}
      />
      <div className='hr-header'>
        <hr />
      </div>



      <section className='section'>
        <div className='productImgs'>
          <div className='main-img'>
            <img onClick={handleModal} src={images.images[value].img} alt="" />
          </div>

          <div className='all-imgs'>
            {
              images.images.map((image, index) => (
                <div key={image.id}>
                  <img className={index === value ? "activeImg" : "thumbnail"} onClick={() => setValue(index)} src={image.thumbnail} alt="" />
                </div>
              ))
            }
          </div>

        </div>

        <div className='carousel-mobile'>

          <div className='img-mobile'>
            <img src={images.images[value].img} alt="" />
            <div onClick={handlePrev} className='prev-mobile'>
              <img src={prev} alt="" />
            </div>
            <div onClick={handleNext} className='next-mobile'>
              <img src={next} alt="" />
            </div>
          </div>

        </div>


        <div className='info'>
          <h3 className='brand'>SNEAKER COMPANY</h3>
          <h3 className='title'>Fall Limited Edition Sneakers</h3>
          <p className='description'>  These low-profile sneakers are your perfect casual wear companion. Featuring a
            durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p>
          <div className='price-discount'>
            <h3>$125.00</h3>
            <p>50%</p>
          </div>
          <p className='before'>$250.00</p>
          <div className='buttons'>
            <div className='counter'>
              <div className='button-minus'>
                <img onClick={handleMinus} src={minus} alt="" />
              </div>
              <div className='counter-container'>
                <h3>{counter}</h3>
              </div>
              <div className='button-plus'>
                <img onClick={handlePlus} src={plus} alt="" />
              </div>
            </div>
            <div className='button-cart'>
              <button onClick={handleAddToCart}><img className='cart-icon' src={cart} alt="" />Add to cart</button>
            </div>
          </div>
        </div>

        {
          showModal &&
          <Modal
            images={images}
            value={value}
            setShowModal={setShowModal}
          />
        }


      </section>

      <Footer />

    </main>
  )
}

export default App

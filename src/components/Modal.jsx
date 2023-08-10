import React, { useState } from 'react'
import './styles/Modal.css'
import prev from '../assets/images/icon-previous.svg'
import next from '../assets/images/icon-next.svg'

const Modal = ({ images, value, setShowModal }) => {

    const [value1, setValue1] = useState(value)

    const handleClose = () => {
        setShowModal(false)
    }

    const handleNextImg = () => {
        setValue1((value1 + 1) % images.images.length)
    }

    const handlePrevImg = () => {
        setValue1((value1 - 1 + images.images.length) % images.images.length)
    }


    return (
        <section className='Modal'>
            <div className='carousel'>
                <div className='main-modal-img'>
                    <img className='modal-img' src={images.images[value1].img} alt="" />
                    <div className='x-close'>
                        <i onClick={handleClose} className='bx bx-x'></i>
                    </div>
                    <div className='prev' onClick={handlePrevImg}>
                        <img src={prev} alt="" />
                    </div>
                    <div className='next' onClick={handleNextImg}>
                        <img src={next} alt="" />
                    </div>
                </div>
                <div className='all-imgs-modal'>
                    {
                        images.images.map((image, index) => (
                            <div key={image.id}>
                                <img onClick={() => setValue1(index)}
                                    className={index === value1 ? "active" : "thumbnailM"}
                                    src={image.thumbnail} alt="" />
                            </div>
                        ))

                    }
                </div>
            </div>

        </section>
    )
}

export default Modal
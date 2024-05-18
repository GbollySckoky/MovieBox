import React from 'react'

const Modal = ({handleShowModal}) => {
    const beer = ''
  return (
    <div className='modal-background' onClick={handleShowModal}>
        <div className="modal-content">
            <h3>I won't grant you access to sign out, i want you to keep enjoying my website, cheers &#x1F603; </h3>
        </div>
    </div>
  )
}

export default Modal
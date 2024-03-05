import React, { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

function Faq () {
  const [isOpen, setIsOpen] = useState(new Array(3).fill(false))

  const toggleOpen = index => {
    const updatedState = [...isOpen]
    updatedState[index] = !updatedState[index]
    setIsOpen(updatedState)
  }

  return (
    <div className='container py-5'>
      <h2 className='text-center mb-4' style={{ color: '#003780' }}>
        Frequently Asked Questions
      </h2>
      <p style={{ color: '#0066F4' }} className='text-center'>
        Have some questions before you get started? Check out our FAQs below or
        call (+234) 123 456 784
      </p>
      <div className='accordion' id='accordionExample'>
        {[...Array(3)].map((_, index) => (
          <div key={index} className='accordion-item'>
            <h2 className='accordion-header'>
              <button
                className={`accordion-button ${
                  isOpen[index] ? '' : 'collapsed'
                }`}
                type='button'
                data-bs-toggle='collapse'
                data-bs-target={`#collapse${index + 1}`}
                aria-expanded={isOpen[index] ? 'true' : 'false'}
                aria-controls={`collapse${index + 1}`}
                onClick={() => toggleOpen(index)}
              >
                Accordion Item #{index + 1}
              </button>
            </h2>
            <div
              id={`collapse${index + 1}`}
              className={`accordion-collapse collapse ${
                isOpen[index] ? 'show' : ''
              }`}
              aria-labelledby={`heading${index + 1}`}
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <strong>This is the {index + 1} item's accordion body.</strong>{' '}
                It is shown by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{' '}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq

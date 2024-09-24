import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp, faArrowUp } from '@fortawesome/free-solid-svg-icons';



const Footer = () => {
  return (
    <div className='flex justify-end pt-3'>
    <a href="#navbar">
    <FontAwesomeIcon icon={faCircleUp} className='text-color-pink h-10 text-end' /> 

    </a>
{/* <FontAwesomeIcon icon={faArrowUp} className='text-color-pink h-10' />  */}

    </div>

 )
}

export default Footer
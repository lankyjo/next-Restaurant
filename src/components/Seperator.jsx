import Image from 'next/image'
import React from 'react'

const Seperator = () => {
  return (
    <Image src={'/images/separator.svg'} width={150} height={40} alt='separator' className='object-contain ' />

  )
}

export default Seperator
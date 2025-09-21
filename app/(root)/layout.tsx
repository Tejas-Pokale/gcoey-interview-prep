import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'

const Rootlayout = ({children}:{children:ReactNode}) => {
  return (
    <div className='root-layout'>
      <nav  className='flex flex-row items-center gap-2'>
        <Link href={'/'}>
          <Image src={'/logo.svg'} alt='logo' width={38} height={32} />
        </Link>
        <h2 className='text-primary-100'>PrepWise</h2>
      </nav>

      {children}

    </div>
  )
}

export default Rootlayout
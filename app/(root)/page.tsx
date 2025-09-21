import { Button} from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
      <section className='card-cta'>

        <div className='flex flex-col gap-6 max-w-lg'>

          <h2>Get Interview ready with AI powered practice & feedback</h2>

          <p className='text-lg'>Practice on real interview questions & get instant feedback</p>

          <Button asChild className='btn-primary max-sm:w-full'>

            <Link href='/interview'>Start an Interview</Link>
            
          </Button>
        </div>

        <Image src='/robot.png' alt='robo-dude' width={400} height={400} className='max-sm:hidden'></Image>

      </section>
    </>
  )
}

export default page
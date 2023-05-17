import Image from 'next/image'
import { Suspense } from 'react'
import Loading from './loading'
import Products from './products/page'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 my-5">
      <Suspense fallback={<Loading/>}> 
      
      <Products/>
      
      </Suspense>
    </main>
  )
}

// import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-cyan-900 w-screen h-screen flex justify-center items-center'>
      <section className='text-center w-full'>
        <button className=' bg-slate-200 py-2 px-6 rounded-md'>Login with Google</button>
      </section>
    </main>
  )
}

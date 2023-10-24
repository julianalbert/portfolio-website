import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Header from "@/components/header";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Julian Albert | Portfolio',
  description: 'Julian is a full-stack data enthusiast with 4 years of experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}>
        <div className='bg-[#dfc9a8] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='bg-[#a8d2df] absolute -z-10 top-[-1rem] left-[-35rem] h-[50rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        <Header />
        {children}
      </body>
    </html>
  )
}

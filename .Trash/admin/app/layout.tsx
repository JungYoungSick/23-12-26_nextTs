
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/ui/globals.css';
import Reload from './ui/layoutButtons/reloadButton'
import LoginButton from './ui/layoutButtons/loginButton'
import SignupButton from './ui/layoutButtons/signupButton';


export const metadata: Metadata = {
  title: 'DyaBya ERP',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='flex w-lvw h-20 items-center pl-10'> 
            <Reload />
        <div className='w-48 flex justify-around relative left-3/4'>
            <LoginButton />
        <div>
            <SignupButton />
        </div>
        </div>
      </div>
      {children}
      </body>
    </html>
  )
}
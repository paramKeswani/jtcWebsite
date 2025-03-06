import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './Landing'
import { SignedOut,SignInButton ,SignedIn,UserButton} from '@clerk/clerk-react'
import Check from './Check'
function App() {


  return (
    <>
        <header>
      <SignedOut>
       
    <Landing></Landing>
      </SignedOut>
      <SignedIn>
        <UserButton />
        {/* <Check/> */}

        <Check></Check>

        <div> hi </div>
      </SignedIn>
    </header>

      
    </>
  )
}

export default App

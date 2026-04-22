import React from 'react'
import { Nexus } from './components/Nexus'
import { About } from './components/About'
import { Navbar } from './components/Navbar'
import { Features } from './components/Features'
import { Story } from './components/Story'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'


export const App = () => {
  return (
    <main className = " relative min-h-screen w-screen overflow-x-hidden ">

     <Navbar/>

     <Nexus/>

     <About/>

     <Features/>

     <Story/>

     <Contact/>

     <Footer/> 

    </main>
  )
}

export default App
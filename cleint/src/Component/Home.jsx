import React from 'react'
import Hero from './Hero'
import Aboutus from '../Home/Aboutus'
import WordGro from '../Home/WordGro'
import Cardsground from '../Home/Cardsground'
import Stor from '../Home/Stor'
import Wstor from '../Home/Wstor'
import CardAcademy from '../Home/CardAcademy'
import Wacademy from '../Home/Wacademy'
import Addtoregister from '../Home/Addtoregister'



function Home() {
  return (
    <div>
      <Hero/>
      <Aboutus/>
      <WordGro/>
      <br></br>
      <Cardsground/>
      <br></br>
      <Wstor/>
      <br></br>
      <Stor/>
      <Wacademy/>
      <br></br>
      <CardAcademy/>
      <Addtoregister/>
     


    </div>
  )
}

export default Home

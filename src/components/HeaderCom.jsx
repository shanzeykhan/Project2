import React from 'react'
import Header from './Header/Header'
import Hero from './Header/Hero'
import Hero2 from './Header/Hero2'
import { header } from '../utils/constant'

const HeaderCom = () => {
  return (
    <div>
      <Header header={header}/>
      <Hero/>
      <Hero2/>
    </div>
  )
}

export default HeaderCom
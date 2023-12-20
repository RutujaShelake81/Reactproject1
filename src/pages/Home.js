import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Cards from './Cards'


export default function Home() {
  return (
    <div>
        <Navbar/>
        <div className='flex'>
        <Sidebar/>
     <Cards/> 
     </div>

    </div>
  )
}

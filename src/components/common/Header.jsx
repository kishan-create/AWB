import React from 'react'
import { Sidebar } from '../sidebar/Sidebar';
import { Navbar } from '../navbar/Navbar';
export const Header = () => {
  return (
    <div>
         <header className="app-header fixed-top">
<Navbar/>
<Sidebar/>
         </header>
    </div>
  )
}

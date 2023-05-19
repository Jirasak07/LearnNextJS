'use client'
import React from 'react'
import AppLogo from './AppLogo'
import {FcAcceptDatabase} from 'react-icons/fc'

export default function AppHeader() {

    const showMessage=()=>{
        alert("สวัสดี")
    }
  return (
    <div>
      <h1 className='header'>App Header</h1>
      <button  onClick={showMessage} className='header btn btn-success ' ><FcAcceptDatabase size={20}/> Click Me</button>
      <AppLogo/>
      <h3 className='text-danger' >Jirasak</h3>
    </div>
  )
}

import React from 'react'

function AppLogo() {
    const fn=()=>{
        alert('Applogo')
    }
  return (
    <div>
      <button onClick={fn} >Click App Logo</button>
    </div>
  )
}

export default AppLogo

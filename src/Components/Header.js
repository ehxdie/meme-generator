import React from 'react'

function Header() {
  return (
    <div className='Header'>
        <img className='Logo' src={process.env.PUBLIC_URL + './Images/Troll Face.png'}></img>
        
        <div className='Header-text'>
            <p className='text1'>Meme Generator</p>
            <p className='text2'>React Course - Project 3</p>

        </div>       
    </div>
  )
}

export default Header
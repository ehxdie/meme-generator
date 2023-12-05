import React from 'react'
import memesData from './memesData'



function Meme() {
  //src = process.env.PUBLIC_URL + './Images/memeimg.png'
  const [meme, setmeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  })

  
  
  
  function update(event){
    const {name,value} = event.target
    setmeme(prearry => {
      return (
        {
          ...prearry,
          [name] : value
        }
      )
    })

  }

  const [allMeme, setallMemes] = React.useState({})

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
    .then(response => response.json())
    .then(data => setallMemes(data))}, []
  )

  function getMemeImages(){
    const memesArray = allMeme.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setmeme(prevmeme => {
      return (
        {
          ...prevmeme,
          randomImage: memesArray[randomNumber].url
        }
      )
    })
    
  }


  return (
    <>
    <div className='Form'>
        <input
        type='text' 
        className='Form-input' 
        id='Form-input' 
        placeholder='Top Text'
        name='topText'
        value={meme.topText}
        onChange={update}
        />
        <input 
        type='text'
        className='Form-input2' 
        id='Form-input' 
        placeholder='Bottom Text'
        name='bottomText'
        value={meme.bottomText}
        onChange={update}
        />
    </div>
    <button className='Get-meme' onClick={getMemeImages}> 
     <p className='Button-text'> Get a new meme </p>
    </button>
    <div className='memetext'>
       <img className='MEMES' src={meme.randomImage}></img>
       <h2 className='memetext-top'>{meme.topText}</h2>
       <h2 className='memetext-bottom'>{meme.bottomText}</h2>
    </div>
   
    </>
 
  )
}

export default Meme
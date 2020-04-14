import React from 'react'
import bird from './bird.jpg';

function Header() {
    return (
       <header style = {headerStyle}>
           <h1>Chirper!</h1>
           <img src={bird} className="App-logo" alt="logo" />

 
}
       </header>
       
    )
}

let headerStyle = {
    background: '#FAF3DD',
    color: 'grey',
    padding: '1px'

}
export default Header
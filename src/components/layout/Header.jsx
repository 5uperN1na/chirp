import React from 'react'
import bird2 from './bird2.jpg';

function Header() {
    return (
        <header style={headerStyle}>
            <p align="middle">
                <img src={bird2} className="App-logo" alt="logo" />
            </p>


        </header>

    )
}


let headerStyle = {
    background: '#7ab2e1',
    color: 'black'

}

export default Header
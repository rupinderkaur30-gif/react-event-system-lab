// Code Keypad Component Here
import React, { Component } from 'react' 


export default class Keypad extends Component {

    // handlePass = () => console.log("Entering password...")

    render() {
        return(
            <input 
            onKeyUp ={() => {
                console.log("Entering password...")
                //{this.handlePass}
            }}
            type="password"
            />
            
        )
    }
}
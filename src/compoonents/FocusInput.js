import React, { Component } from 'react'

import Input from './input'
 class FocusInput extends Component {
     constructor(props) {
         super(props)
     
         this.componentRef= React.createRef();
     }
     clickHandler=()=>{
         this.componentRef.current.focusinput();
     }
     
    render() {
        return (
            <div>
                <Input ref={this.componentRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput